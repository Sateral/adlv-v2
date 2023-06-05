/** @type {import('next').NextConfig} */
const nextConfig = {
  head: {
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.ico',
      },
    ],
  },
};

module.exports = nextConfig
