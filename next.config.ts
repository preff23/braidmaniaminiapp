import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // удаляем стандартное правило для svg
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('svg')) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    // добавляем svgr
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
