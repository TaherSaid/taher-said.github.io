/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // hostname: ["images.ctfassets.net"],
    domains: ['github.com', 'linkedin.com',"images.ctfassets.net","flowbite.s3.amazonaws.com"],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
