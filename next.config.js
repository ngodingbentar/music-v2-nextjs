/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_APP_SHAZAM_API_KEY: process.env.NEXT_APP_SHAZAM_API_KEY,
  }
}

module.exports = nextConfig
