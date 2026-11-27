import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Hemat kuota Vercel Image Optimization: 7 ukuran saja di srcset
    // (default 16 ukuran per gambar). Semuanya subset dari ukuran default,
    // jadi cache yang sudah ada tetap terpakai.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [128, 256, 384],
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
