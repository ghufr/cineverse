import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === "test",
    remotePatterns: [new URL("https://image.tmdb.org/**")],
  },
};

export default nextConfig;
