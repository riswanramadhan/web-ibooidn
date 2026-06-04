import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ibooidn.vercel.app",
          },
        ],
        destination: "https://ibooidn.dekatlokal.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
