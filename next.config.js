/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  images: {
    domains: ['localhost'],
  },
  // Uncomment the following if you need to enable experimental features
  // experimental: {
  //   serverActions: true,
  // },
});

module.exports = nextConfig;