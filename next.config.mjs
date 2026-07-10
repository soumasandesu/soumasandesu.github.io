/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.yaml': {
        loaders: ['yaml-loader'],
        as: 'json',
      },
      '*.yml': {
        loaders: ['yaml-loader'],
        as: 'json',
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    });
    return config;
  },
};

export default nextConfig;
