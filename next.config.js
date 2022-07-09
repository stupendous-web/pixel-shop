/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: "https://thepixelshop.app", // For sitemap
  generateRobotsTxt: true,
  exclude: ["/beta"], // For sitemap
};

module.exports = nextConfig;
