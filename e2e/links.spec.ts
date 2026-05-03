/**
 * Link integrity E2E tests — Phase 8 §13.2
 *
 * Verifies:
 * - All internal links on every route return 2xx (no 404s)
 * - All external links have rel containing "noopener" and "noreferrer"
 * - All external links have target="_blank"
 * - Contact form exists on /contact
 * - Main nav links resolve
 */

import { test, expect } from "@playwright/test";

const ROUTES = ["/", "/how-it-works", "/compliance", "/about", "/contact", "/privacy", "/terms"];

for (const route of ROUTES) {
  test.describe(`Link audit — ${route}`, () => {
    test("all internal links resolve without 404", async ({ page, request }) => {
      await page.goto(route);

      const hrefs = await page
        .locator("a[href]")
        .evaluateAll((anchors) =>
          anchors
            .map((a) => (a as HTMLAnchorElement).getAttribute("href") ?? "")
            .filter(
              (h) =>
                h.startsWith("/") && !h.startsWith("/#") && !h.startsWith("/api/") && h !== "#",
            ),
        );

      const unique = [...new Set(hrefs)];
      for (const href of unique) {
        const response = await request.get(href);
        expect(
          response.status(),
          `Internal link ${href} on ${route} returned ${response.status()}`,
        ).toBeLessThan(400);
      }
    });

    test("external links have rel=noopener noreferrer and target=_blank", async ({ page }) => {
      await page.goto(route);

      const externalLinks = await page.locator("a[href^='http']").evaluateAll((anchors) =>
        anchors.map((a) => ({
          href: (a as HTMLAnchorElement).href,
          rel: (a as HTMLAnchorElement).rel,
          target: (a as HTMLAnchorElement).target,
        })),
      );

      for (const link of externalLinks) {
        expect(
          link.rel,
          `External link ${link.href} on ${route} missing rel="noopener noreferrer"`,
        ).toContain("noopener");
        expect(
          link.rel,
          `External link ${link.href} on ${route} missing rel="noreferrer"`,
        ).toContain("noreferrer");
        expect(link.target, `External link ${link.href} on ${route} missing target="_blank"`).toBe(
          "_blank",
        );
      }
    });
  });
}

test("sitemap.xml is accessible", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("xml");
});

test("robots.txt is accessible", async ({ request }) => {
  const response = await request.get("/robots.txt");
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain("User-agent");
  expect(body).toContain("Sitemap");
});

test("contact page has a form", async ({ page }) => {
  await page.goto("/contact");
  const form = page.locator("form");
  await expect(form).toBeVisible();
});
