import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration for Cindariq E2E + accessibility tests.
 * Tests run against a locally started Next.js production server.
 * CI installs Chromium only to keep cache lean.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",

  use: {
    baseURL: process.env.E2E_BASE_URL ?? "http://localhost:3000",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  // Automatically start and stop the Next.js production server during tests.
  webServer: {
    command: "pnpm start",
    url: process.env.E2E_BASE_URL ?? "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
