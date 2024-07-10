// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;