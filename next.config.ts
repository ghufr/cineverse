import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://image.tmdb.org/**"),
      new URL("https://placehold.co/**"),
    ],
  },
};

export default nextConfig;
