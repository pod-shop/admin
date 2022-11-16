const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withTranslateRoutes = require('next-translate-routes/plugin');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	styledComponents: true,
  swcMinify: true,
  i18n,
  experimental: {
    nextScriptWorkers: true,
    images: {
      layoutRaw: true
    },
  },
  images: {
    domains: process.env.NODE_ENV === 'production'
      ? []
      : ['localhost']
  },
}


module.exports = withPWA(
  withTranslateRoutes({
    ...nextConfig,
    pwa: {
      dest: 'public',
      runtimeCaching,
      disable: process.env.NODE_ENV !== 'production',
    },
  })
)
