/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com"
      },
      {
        hostname: "fiverr-res.cloudinary.com"
      },
    ]
  }
}

module.exports = nextConfig
