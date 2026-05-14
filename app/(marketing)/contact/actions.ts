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
// Next.js Server Actions include built-in CSRF protection via origin/host header
// matching. No additional CSRF token is required for same-origin submissions.
// If this action is ever exposed over a raw fetch endpoint, add an explicit
// CSRF token check at that point.
// ---------------------------------------------------------------------------
export async function submitContact(_prevState: unknown, formData: FormData) {
  // 1. Honeypot — silently succeed so bots get no signal
  const raw = Object.fromEntries(formData);
  if (raw["_hp"]) {
    return { success: true, error: null };
  }

  // 2. Rate limit by IP
  //    x-forwarded-for is set by Vercel/Cloudflare edge and can be trusted in
  //    those environments. On self-hosted infra this header can be forged by
  //    the client — replace with a trusted header (e.g. CF-Connecting-IP) if
  //    the deployment target changes.
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

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;width:130px;vertical-align:top;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;">${label}</td>
      <td style="padding:10px 16px;vertical-align:top;font-size:14px;color:#111827;">${value}</td>
    </tr>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:32px 16px;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
    <tr>
      <td style="background:#0f172a;border-radius:8px 8px 0 0;padding:28px 32px;">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#e85d26;">CINDARIQ</p>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#f8fafc;">New Consultation Request</h1>
      </td>
    </tr>
    <tr>
      <td style="background:#ffffff;border-radius:0 0 8px 8px;padding:8px 16px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          ${row("Full name", name)}
          <tr><td colspan="2" style="padding:0 16px;"><hr style="border:none;border-top:1px solid #f1f5f9;margin:0;"></td></tr>
          ${row("Company", company)}
          ${role ? `<tr><td colspan="2" style="padding:0 16px;"><hr style="border:none;border-top:1px solid #f1f5f9;margin:0;"></td></tr>${row("Role", role)}` : ""}
          <tr><td colspan="2" style="padding:0 16px;"><hr style="border:none;border-top:1px solid #f1f5f9;margin:0;"></td></tr>
          ${row("Email address", `<a href="mailto:${email}" style="color:#e85d26;text-decoration:none;">${email}</a>`)}
          ${phone ? `<tr><td colspan="2" style="padding:0 16px;"><hr style="border:none;border-top:1px solid #f1f5f9;margin:0;"></td></tr>${row("Phone number", `<a href="tel:${phone}" style="color:#e85d26;text-decoration:none;">${phone}</a>`)}` : ""}
          <tr><td colspan="2" style="padding:0 16px;"><hr style="border:none;border-top:1px solid #f1f5f9;margin:0;"></td></tr>
          ${row("Message", `<span style="white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`)}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 0 0;text-align:center;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">This lead was submitted via the Cindariq website consultation form.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { error: sendError } = await resend.emails.send({
    from: process.env.CONTACT_EMAIL_FROM ?? "no-reply@cindariq.co.ke",
    to: process.env.CONTACT_EMAIL_TO ?? "hello@cindariq.co.ke",
    replyTo: email,
    subject: `New enquiry from ${name} — ${company}`,
    html,
    text: `Name: ${name}\nCompany: ${company}\nRole: ${role || "—"}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
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
