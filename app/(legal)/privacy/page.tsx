export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-190 px-6 py-16 md:px-8 md:py-24">
      <h1 className="mb-4 text-h1 font-bold text-cinder">Privacy Policy</h1>
      <p className="mb-10 text-caption font-medium text-ash">
        Cindariq Limited &mdash; cindariq.co.ke
      </p>

      <div className="space-y-8 text-body text-ash">
        <section aria-labelledby="privacy-status">
          <h2 id="privacy-status" className="mb-3 text-h4 font-semibold text-cinder">
            Status
          </h2>
          <p>
            This privacy policy is being finalised by our legal counsel and will be published in
            full before the site goes live. The complete policy will be compliant with the Data
            Protection Act 2019 (Kenya) and, where applicable, the General Data Protection
            Regulation (GDPR).
          </p>
        </section>

        <section aria-labelledby="privacy-scope">
          <h2 id="privacy-scope" className="mb-3 text-h4 font-semibold text-cinder">
            What this policy will cover
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>What personal data Cindariq collects and why</li>
            <li>How we process and store personal data</li>
            <li>Your rights as a data subject under the Data Protection Act 2019</li>
            <li>How to exercise those rights, including the right to erasure</li>
            <li>How to contact our Data Protection Officer</li>
            <li>Retention periods for each data category</li>
            <li>Sub-processor disclosure</li>
          </ul>
        </section>

        <section aria-labelledby="privacy-contact">
          <h2 id="privacy-contact" className="mb-3 text-h4 font-semibold text-cinder">
            Questions in the meantime
          </h2>
          <p>
            If you have questions about how Cindariq handles personal data before this policy is
            published, please write to us at{" "}
            <a
              href="mailto:privacy@cindariq.co.ke"
              className="font-medium text-ember underline-offset-4 hover:underline"
            >
              privacy@cindariq.co.ke
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
