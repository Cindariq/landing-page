"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/app/(marketing)/contact/actions";
import { contactSchema } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";
import { useFormValidation } from "@/lib/store/form-store";

const initialState = { success: false, error: null as Record<string, string[]> | null };

/** Single field row with label, input/textarea, and inline error. */
function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string[];
  children: React.ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-caption font-semibold text-cinder">
        {label}
        {required && (
          <span className="ml-1 text-ember" aria-hidden="true">
            *
          </span>
        )}
      </Label>
      {/* Pass aria-describedby + aria-invalid to the child via cloneElement pattern */}
      <div aria-describedby={error?.length ? errorId : undefined}>{children}</div>
      {error?.length ? (
        <span
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-caption text-ember"
        >
          <WarningCircle size={14} aria-hidden="true" />
          {error[0]}
        </span>
      ) : null}
    </div>
  );
}

// Extend gtag / plausible on window for analytics events
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: Record<string, unknown>) => void;
  }
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const { touched, touch, fieldErrors, setFieldError, clearFieldError } = useFormValidation();

  // Fire analytics event once when form submission succeeds (PRD §5.6 AC)
  useEffect(() => {
    if (!state.success) return;
    window.gtag?.("event", "contact_form_submit");
    window.plausible?.("contact_form_submit");
  }, [state.success]);

  // Validate a single field on blur
  function handleBlur(field: string, value: string) {
    touch(field);
    const partial = contactSchema.shape[field as keyof typeof contactSchema.shape];
    if (!partial) return;
    const result = partial.safeParse(value);
    if (!result.success) {
      setFieldError(field, result.error.issues[0]?.message ?? "Invalid");
    } else {
      clearFieldError(field);
    }
  }

  // Server errors take precedence; client blur errors fill the rest
  function getError(field: string): string[] | undefined {
    const serverErr = state.error?.[field];
    if (serverErr) return serverErr;
    if (touched[field] && fieldErrors[field]) return [fieldErrors[field]!];
    return undefined;
  }

  if (state.success) {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center gap-6 rounded-xl border border-cinder/10 bg-parchment p-12 text-center"
      >
        <CheckCircle size={48} className="text-ember" aria-hidden="true" />
        <h2 className="text-h3 font-semibold text-cinder">Message received.</h2>
        <p className="max-w-105 text-body text-ash">
          We will be in touch within one business day. If you would prefer to speak sooner, use the
          calendar link to book directly.
        </p>
        <a
          href="https://calendly.com/cindariq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body font-medium text-ember underline-offset-4 hover:underline"
        >
          Open booking calendar
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      {/* Non-dismissible server error banner — covers both field errors and _form-level errors */}
      {state.error && !state.success && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 rounded-lg border border-ember/30 bg-ember/5 p-4"
        >
          <WarningCircle size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden="true" />
          <p className="text-caption text-ember">
            {state.error["_form"]?.[0] ??
              "Something went wrong. Please check the fields below and try again."}
          </p>
        </div>
      )}

      {/* Row — Name + Company */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={getError("name")}>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!getError("name")}
            aria-describedby={getError("name") ? "name-error" : undefined}
            onBlur={(e) => handleBlur("name", e.target.value)}
          />
        </Field>
        <Field id="company" label="Company" required error={getError("company")}>
          <Input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={!!getError("company")}
            aria-describedby={getError("company") ? "company-error" : undefined}
            onBlur={(e) => handleBlur("company", e.target.value)}
          />
        </Field>
      </div>

      {/* Row — Role (optional) + Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="role" label="Role" error={getError("role")}>
          <Input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            aria-invalid={!!getError("role")}
            aria-describedby={getError("role") ? "role-error" : undefined}
            onBlur={(e) => handleBlur("role", e.target.value)}
          />
        </Field>
        <Field id="email" label="Email address" required error={getError("email")}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!getError("email")}
            aria-describedby={getError("email") ? "email-error" : undefined}
            onBlur={(e) => handleBlur("email", e.target.value)}
          />
        </Field>
      </div>

      {/* Phone (optional) */}
      <Field id="phone" label="Phone number" error={getError("phone")}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+254 712 345 678"
          aria-invalid={!!getError("phone")}
          aria-describedby={getError("phone") ? "phone-error" : undefined}
          onBlur={(e) => handleBlur("phone", e.target.value)}
        />
      </Field>

      {/* Message */}
      <Field id="message" label="Message" required error={getError("message")}>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!getError("message")}
          aria-describedby={getError("message") ? "message-error" : undefined}
          onBlur={(e) => handleBlur("message", e.target.value)}
        />
      </Field>

      {/* Honeypot — visually hidden, must stay empty */}
      <div
        aria-hidden="true"
        className="tabindex-[-1] absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="_hp">Leave this blank</label>
        <input id="_hp" name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isPending} className="self-start">
        {isPending ? "Sending…" : "Send message"}
      </Button>

      <p className="text-caption text-ash">
        Fields marked{" "}
        <span className="text-ember" aria-hidden="true">
          *
        </span>{" "}
        are required.
      </p>
    </form>
  );
}
