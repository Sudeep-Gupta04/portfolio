import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
