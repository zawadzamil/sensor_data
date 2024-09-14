// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development',
//   // Disable Workbox logs in development
//   disableDevLogs: process.env.NODE_ENV === 'development',
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['localhost', 'http://192.168.0.109:8070', '*'],
  },
};

module.exports = nextConfig;
