/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mindware.net',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
