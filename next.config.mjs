/* eslint-disable no-unused-vars */
// next.config.js

/** @type {import('next').NextConfig} */
import nextTranslate from 'next-translate-plugin'

const nextConfig = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config
  }
})

export default nextConfig
