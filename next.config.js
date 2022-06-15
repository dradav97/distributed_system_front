/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['https://drive.google.com'],
  },
  
}

module.exports = nextConfig
