import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a parent-level lockfile exists, so Turbopack must
  // be told this project directory is the root to infer output correctly.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Warm coffee photography is served through the optimizer. Swap these
    // patterns for your owned asset host in production.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
