export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16 md:px-8 md:py-24">
      <h1 className="mb-4 text-h1 font-bold text-cinder">Terms of Service</h1>
      <p className="mb-10 text-caption font-medium text-ash">
        Cindariq Limited &mdash; cindariq.co.ke
      </p>

      <div className="space-y-8 text-body text-ash">
        <section aria-labelledby="terms-status">
          <h2 id="terms-status" className="mb-3 text-h4 font-semibold text-cinder">
            Status
          </h2>
          <p>
            These terms of service are being drafted by our legal counsel and will be published in
            full before the site goes live. The complete terms will be governed by Kenyan law and
            drafted in accordance with the Companies Act 2015.
          </p>
        </section>

        <section aria-labelledby="terms-scope">
          <h2 id="terms-scope" className="mb-3 text-h4 font-semibold text-cinder">
            What these terms will cover
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Permitted use of the Cindariq website and any associated services</li>
            <li>Intellectual property ownership</li>
            <li>Accuracy of information presented on the site</li>
            <li>Limitation of liability</li>
            <li>Governing law (Kenya) and jurisdiction</li>
            <li>Dispute resolution process</li>
            <li>Amendment procedure for these terms</li>
          </ul>
        </section>

        <section aria-labelledby="terms-contact">
          <h2 id="terms-contact" className="mb-3 text-h4 font-semibold text-cinder">
            Questions in the meantime
          </h2>
          <p>
            If you have questions about the terms under which Cindariq operates before this document
            is published, please write to us at{" "}
            <a
              href="mailto:legal@cindariq.co.ke"
              className="font-medium text-ember underline-offset-4 hover:underline"
            >
              legal@cindariq.co.ke
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
