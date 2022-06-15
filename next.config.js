/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL||'http://52.200.122.103:3001/files',
  },
  images: {
    domains: ['drive.google.com'],
  },
  
}

module.exports = nextConfig
