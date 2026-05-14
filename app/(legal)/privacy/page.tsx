import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Cindariq",
  description: "How Cindariq Limited collects, uses, and protects your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-190 px-6 py-16 md:px-8 md:py-24">
      <h1 className="mb-4 text-h1 font-bold text-cinder">Privacy Policy</h1>
      <p className="mb-2 text-caption font-medium text-ash">
        Cindariq Limited &mdash; cindariq.co.ke
      </p>
      <p className="mb-10 text-caption text-ash">Last updated: 14 May 2026</p>

      <div className="space-y-10 text-body text-ash">
        <section aria-labelledby="privacy-controller">
          <h2 id="privacy-controller" className="mb-3 text-h4 font-semibold text-cinder">
            1. Data controller
          </h2>
          <p>
            Cindariq Limited (&ldquo;Cindariq&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is the
            data controller for personal data collected through cindariq.co.ke. We are registered
            under the Companies Act 2015 (Kenya) and operate in compliance with the Data Protection
            Act 2019 (Kenya) (&ldquo;DPA 2019&rdquo;).
          </p>
          <p className="mt-3">
            Contact us at{" "}
            <a
              href="mailto:privacy@cindariq.co.ke"
              className="font-medium text-ember underline-offset-4 hover:underline"
            >
              privacy@cindariq.co.ke
            </a>{" "}
            for all data-related enquiries.
          </p>
        </section>

        <section aria-labelledby="privacy-data-collected">
          <h2 id="privacy-data-collected" className="mb-3 text-h4 font-semibold text-cinder">
            2. Data we collect and why
          </h2>
          <p className="mb-4">
            We collect personal data only when you actively provide it through our contact form.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-caption">
              <thead>
                <tr className="border-b border-cinder/10 text-left">
                  <th className="pr-6 pb-3 font-semibold text-cinder">Data field</th>
                  <th className="pr-6 pb-3 font-semibold text-cinder">Purpose</th>
                  <th className="pb-3 font-semibold text-cinder">Legal basis (DPA 2019)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cinder/10">
                <tr>
                  <td className="py-3 pr-6">Full name</td>
                  <td className="py-3 pr-6">To address you in correspondence</td>
                  <td className="py-3">Legitimate interest / pre-contractual steps</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Company name</td>
                  <td className="py-3 pr-6">To understand your organisational context</td>
                  <td className="py-3">Legitimate interest / pre-contractual steps</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Role (optional)</td>
                  <td className="py-3 pr-6">To route your enquiry to the right team member</td>
                  <td className="py-3">Legitimate interest</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Email address</td>
                  <td className="py-3 pr-6">To reply to your enquiry</td>
                  <td className="py-3">Legitimate interest / pre-contractual steps</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Phone number (optional)</td>
                  <td className="py-3 pr-6">To contact you if you prefer a call</td>
                  <td className="py-3">Consent (field is optional)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Message content</td>
                  <td className="py-3 pr-6">To understand and respond to your enquiry</td>
                  <td className="py-3">Legitimate interest / pre-contractual steps</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            We do not use submitted data for marketing without your explicit consent.
          </p>
        </section>

        <section aria-labelledby="privacy-subprocessors">
          <h2 id="privacy-subprocessors" className="mb-3 text-h4 font-semibold text-cinder">
            3. Sub-processors
          </h2>
          <p className="mb-3">
            Contact form submissions are delivered by{" "}
            <strong className="text-cinder">Resend</strong> (Resend Inc., USA), our transactional
            email provider. Resend processes only the data fields listed above and does so as a data
            processor acting on our instructions. Resend operates in accordance with its own privacy
            policy and applicable data protection law.
          </p>
          <p>
            The site is hosted on <strong className="text-cinder">Vercel</strong> (Vercel Inc.,
            USA). Vercel may process request metadata (IP address, headers) as part of standard
            infrastructure operation. No personal data is persisted by Vercel beyond standard server
            logs.
          </p>
        </section>

        <section aria-labelledby="privacy-retention">
          <h2 id="privacy-retention" className="mb-3 text-h4 font-semibold text-cinder">
            4. Retention
          </h2>
          <p>
            Email correspondence generated from your contact form submission is retained in our
            inbox for as long as necessary to complete the business relationship you initiated, and
            no longer than 24 months after last contact. You may request deletion at any time (see
            section 6).
          </p>
        </section>

        <section aria-labelledby="privacy-cookies">
          <h2 id="privacy-cookies" className="mb-3 text-h4 font-semibold text-cinder">
            5. Cookies and tracking
          </h2>
          <p>
            This site currently sets no first-party tracking or advertising cookies. See our{" "}
            <a
              href="/cookie-policy"
              className="font-medium text-ember underline-offset-4 hover:underline"
            >
              Cookie Policy
            </a>{" "}
            for full details.
          </p>
        </section>

        <section aria-labelledby="privacy-rights">
          <h2 id="privacy-rights" className="mb-3 text-h4 font-semibold text-cinder">
            6. Your rights under the DPA 2019
          </h2>
          <p className="mb-3">As a data subject you have the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing based on legitimate interest</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with the Office of the Data Protection Commissioner (ODPC)</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, write to{" "}
            <a
              href="mailto:privacy@cindariq.co.ke"
              className="font-medium text-ember underline-offset-4 hover:underline"
            >
              privacy@cindariq.co.ke
            </a>
            . We will respond within 21 days as required by the DPA 2019.
          </p>
        </section>

        <section aria-labelledby="privacy-changes">
          <h2 id="privacy-changes" className="mb-3 text-h4 font-semibold text-cinder">
            7. Changes to this policy
          </h2>
          <p>
            We will update this page when our data practices change. The &ldquo;last updated&rdquo;
            date at the top of this page indicates when the most recent revision was made.
          </p>
        </section>
      </div>
    </article>
  );
}
