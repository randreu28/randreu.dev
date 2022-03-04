/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

/* For Three.js glsl importation */
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
      config.module.rules.push({
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: ['raw-loader', 'glslify-loader'],
      });

      return config;
  }
};