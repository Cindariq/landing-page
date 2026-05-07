import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/section-container";
import { Eyebrow } from "@/components/content/eyebrow";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Cindariq — Book a Discovery Call",
  description:
    "Reach Cindariq directly. 45-minute discovery call, no obligation. Or email hello@cindariq.co.ke. Nairobi-based, serving across East Africa.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <SectionContainer background="cinder" paddingY="md" ariaLabelledBy="contact-page-heading">
        <Eyebrow colour="smoke">Get in touch</Eyebrow>
        <h1 id="contact-page-heading" className="mb-6 max-w-145 text-h1 font-bold text-smoke">
          Start with a conversation.
        </h1>
        <p className="max-w-120 text-body-lg text-smoke/80">
          Fill in the form below and we will be in touch within one business day. If you prefer to
          book time directly, the calendar link is on the right.
        </p>
      </SectionContainer>

      {/* Form + sidebar */}
      <SectionContainer background="smoke" paddingY="lg">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Contact form */}
          <ContactForm />

          {/* Sidebar */}
          <aside aria-label="Alternative contact options" className="lg:pt-1">
            <div className="sticky top-24 flex flex-col gap-8">
              <div>
                <h2 className="mb-3 text-h4 font-semibold text-cinder">Prefer to book directly?</h2>
                <p className="mb-4 text-body text-ash">
                  Use the calendar link to schedule a 45-minute discovery call at a time that suits
                  you. No preparation required on your side.
                </p>
                <a
                  href="https://calendly.com/cindariq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body font-medium text-ember underline-offset-4 hover:underline"
                >
                  Open booking calendar
                </a>
              </div>

              <hr className="border-cinder/10" />

              <div>
                <h2 className="mb-3 text-h4 font-semibold text-cinder">What to expect</h2>
                <ul className="space-y-3 text-body text-ash">
                  <li>Forty-five minutes, no longer.</li>
                  <li>We listen first. We pitch only if there is something worth pitching.</li>
                  <li>No follow-up unless you ask.</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </SectionContainer>
    </>
  );
}
