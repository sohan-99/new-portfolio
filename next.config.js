/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};

module.exports = nextConfig;
