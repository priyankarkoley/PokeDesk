/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     allowFutureImage: true,
     domains: ['assets.pokemon.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
