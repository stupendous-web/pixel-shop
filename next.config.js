/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: "https://thepixelshop.app", // For sitemap
  generateRobotsTxt: true,
  exclude: ["/beta"], // For sitemap
  async rewrites() {
    return [
      {
        source: "/sprites/:collection/:token",
        destination: "/api/sprites/:collection/:token",
      },
    ];
  },
};

module.exports = nextConfig;
