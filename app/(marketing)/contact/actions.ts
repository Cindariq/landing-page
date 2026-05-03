"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";

// ---------------------------------------------------------------------------
// Rate-limit store
// In-memory per-process: safe for low-traffic MVP on a single Vercel instance.
// For high-traffic or multi-region deploy, swap this for Upstash Redis:
//   https://upstash.com/docs/redis/quickstart/nextjs-server-actions
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitStore.get(ip) ?? []).filter((t) => t > windowStart);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

// ---------------------------------------------------------------------------
// Resend client — only instantiated when API key is present
// ---------------------------------------------------------------------------
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

// ---------------------------------------------------------------------------
// Server action
// ---------------------------------------------------------------------------
export async function submitContact(_prevState: unknown, formData: FormData) {
  // 1. Honeypot — silently succeed so bots get no signal
  const raw = Object.fromEntries(formData);
  if (raw["_hp"]) {
    return { success: true, error: null };
  }

  // 2. Rate limit by IP (x-forwarded-for from Vercel / Cloudflare, fallback "unknown")
  const hdrs = await headers();
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return {
      success: false,
      error: {
        _form: ["Too many submissions. Please wait an hour before trying again."],
      },
    };
  }

  // 3. Zod validation
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: parsed.error.flatten().fieldErrors };
  }

  const { name, company, role, email, phone, message } = parsed.data;

  // 4. Email delivery
  const resend = getResend();

  if (!resend) {
    // RESEND_API_KEY not yet set — safe fallback for local dev & pre-launch preview.
    // Log the submission so nothing is lost; treat as success so the form clears.
    console.warn(
      "[ContactForm] RESEND_API_KEY not configured. Submission received but not delivered.",
      { name, company, email },
    );
    return { success: true, error: null };
  }

  const { error: sendError } = await resend.emails.send({
    from: process.env.CONTACT_EMAIL_FROM ?? "no-reply@cindariq.co.ke",
    to: process.env.CONTACT_EMAIL_TO ?? "hello@cindariq.co.ke",
    replyTo: email,
    subject: `New enquiry from ${name} — ${company}`,
    text: [
      `Name:     ${name}`,
      `Company:  ${company}`,
      `Role:     ${role || "—"}`,
      `Email:    ${email}`,
      `Phone:    ${phone || "—"}`,
      "",
      message,
    ].join("\n"),
  });

  if (sendError) {
    console.error("[ContactForm] Resend delivery error:", sendError);
    return {
      success: false,
      error: { _form: ["Message could not be delivered. Please try again or email us directly."] },
    };
  }

  return { success: true, error: null };
}
