import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Cindariq",
  description: "How Cindariq uses cookies and similar technologies on cindariq.co.ke.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <article className="mx-auto max-w-190 px-6 py-16 md:px-8 md:py-24">
      <h1 className="mb-4 text-h1 font-bold text-cinder">Cookie Policy</h1>
      <p className="mb-2 text-caption font-medium text-ash">
        Cindariq Limited &mdash; cindariq.co.ke
      </p>
      <p className="mb-10 text-caption text-ash">Last updated: 14 May 2026</p>

      <div className="space-y-10 text-body text-ash">
        <section aria-labelledby="cookie-what">
          <h2 id="cookie-what" className="mb-3 text-h4 font-semibold text-cinder">
            1. What are cookies?
          </h2>
          <p>
            Cookies are small text files placed on your device by a website. They are widely used to
            make websites function, remember your preferences, and provide analytical information to
            site owners.
          </p>
        </section>

        <section aria-labelledby="cookie-current">
          <h2 id="cookie-current" className="mb-3 text-h4 font-semibold text-cinder">
            2. Cookies this site currently sets
          </h2>
          <p className="mb-4">
            <strong className="text-cinder">
              cindariq.co.ke currently sets no first-party tracking or advertising cookies.
            </strong>{" "}
            No analytics or marketing scripts are loaded. Your browsing activity on this site is not
            tracked.
          </p>
          <p>
            The following technical cookies may be set by our hosting infrastructure (Vercel) as
            part of normal operation. These are strictly necessary and cannot be disabled without
            affecting site functionality.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-caption">
              <thead>
                <tr className="border-b border-cinder/10 text-left">
                  <th className="pr-6 pb-3 font-semibold text-cinder">Name</th>
                  <th className="pr-6 pb-3 font-semibold text-cinder">Provider</th>
                  <th className="pr-6 pb-3 font-semibold text-cinder">Purpose</th>
                  <th className="pb-3 font-semibold text-cinder">Expiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cinder/10">
                <tr>
                  <td className="py-3 pr-6 font-mono text-[13px]">__vercel_live_token</td>
                  <td className="py-3 pr-6">Vercel</td>
                  <td className="py-3 pr-6">Preview deployment authentication</td>
                  <td className="py-3">Session</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="cookie-analytics">
          <h2 id="cookie-analytics" className="mb-3 text-h4 font-semibold text-cinder">
            3. Analytics cookies (not yet active)
          </h2>
          <p>
            We intend to introduce privacy-respecting analytics in a future release to understand
            how visitors use this site. Before any analytics cookies are set, we will update this
            policy and present a consent banner. No analytics cookies will be set without your
            explicit acceptance.
          </p>
        </section>

        <section aria-labelledby="cookie-third-party">
          <h2 id="cookie-third-party" className="mb-3 text-h4 font-semibold text-cinder">
            4. Third-party links
          </h2>
          <p>
            This site contains links to external services including LinkedIn, X (Twitter),
            Instagram, WhatsApp, and Calendly. When you click these links and visit those platforms,
            they may set their own cookies on your device. Cindariq has no control over third-party
            cookies and is not responsible for the privacy practices of those services. We encourage
            you to review the privacy and cookie policies of any external site you visit.
          </p>
        </section>

        <section aria-labelledby="cookie-manage">
          <h2 id="cookie-manage" className="mb-3 text-h4 font-semibold text-cinder">
            5. Managing cookies
          </h2>
          <p className="mb-3">
            Most browsers allow you to refuse or delete cookies. How to do this differs by browser;
            please refer to your browser&rsquo;s help documentation. Disabling strictly necessary
            cookies may affect site functionality.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ember underline-offset-4 hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ember underline-offset-4 hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-gb/guide/safari/sfri11471"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ember underline-offset-4 hover:underline"
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ember underline-offset-4 hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="cookie-contact">
          <h2 id="cookie-contact" className="mb-3 text-h4 font-semibold text-cinder">
            6. Contact
          </h2>
          <p>
            Questions about this policy? Write to{" "}
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
