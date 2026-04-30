"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(_prevState: unknown, formData: FormData) {
  const raw = Object.fromEntries(formData);
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return { success: false, error: parsed.error.flatten().fieldErrors };
  }

  const { name, email, organisation, message } = parsed.data;

  await resend.emails.send({
    from: process.env.CONTACT_EMAIL_FROM ?? "no-reply@cindariq.co.ke",
    to: process.env.CONTACT_EMAIL_TO ?? "hello@cindariq.co.ke",
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation ?? "—"}\n\n${message}`,
  });

  return { success: true, error: null };
}
