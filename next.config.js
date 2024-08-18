const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  images: {
    unoptimized: true,
  },
}

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  const env = {
    API_PROD_URL: (() => {
      if (isDev) return process.env.API_BASE_URL
      if (isProd) {
        return process.env.API_PROD_URL
      }
      if (isStaging) return process.env.API_BASE_URL
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    API_BASE_URL: process.env.API_BASE_URL,
  }

  return {
    ...nextConfig, env
  }
}

