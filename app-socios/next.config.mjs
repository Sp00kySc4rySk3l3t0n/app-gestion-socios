/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fonts.gstatic.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
