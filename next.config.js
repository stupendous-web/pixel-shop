/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: "https://thepixelshop.app",
  generateRobotsTxt: true,
  exclude: ["/beta"],
};

module.exports = nextConfig;
