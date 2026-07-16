/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "5000", pathname: "/uploads/**" },
      { protocol: "https", hostname: "bio-chem.in", pathname: "/uploads/**" },
      { protocol: "https", hostname: "www.bio-chem.in", pathname: "/uploads/**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*.(webp|png|jpg|jpeg|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
