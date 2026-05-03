import { z } from "zod";

// E.164 phone: optional, must start with + followed by 7–15 digits
const phoneRegex = /^\+[1-9]\d{6,14}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be 80 characters or fewer"),
  company: z
    .string()
    .min(2, "Company must be at least 2 characters")
    .max(120, "Company must be 120 characters or fewer"),
  role: z.string().max(80, "Role must be 80 characters or fewer").optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number in E.164 format (e.g. +254712345678)")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be 2000 characters or fewer"),
  /** Honeypot — must be empty. Filled means bot. */
  _hp: z.literal("").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
