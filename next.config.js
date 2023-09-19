/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config , opts) {
    if (!opts.isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}],
    })
    return config
  },
}

module.exports = nextConfig
