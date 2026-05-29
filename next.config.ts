import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export / Cloudflare Pages
  },
};

export default nextConfig;
