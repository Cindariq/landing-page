import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
  },
  // Fail build on TypeScript errors
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
