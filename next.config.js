// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const withOptimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA(
  withOptimizedImages({
    images: {
      domains: ['images1.fanpop.com'],
    },
    pwa: {
      dest: 'public',
      disable: !isProd,
    },
  })
);
