/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.immediate.co.uk',
      'staticfanpage.akamaized.net',
      'cdn.britannica.com',
    ],
  },
}

module.exports = nextConfig
