
module.exports = {
  reactStrictMode: true,
  /* For Three.js glsl importation */
  webpack: (config, options) => {
      config.module.rules.push({
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: ['raw-loader', 'glslify-loader'],
      });

      return config;
  },
  /* Internationalized Routing */
  i18n: {
    locales: ['es', 'en', 'ca'],
    defaultLocale: 'es',
  }
};