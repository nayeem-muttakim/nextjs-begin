/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'class.unsplash.com',
        pathname: '**',
      },
    ],
    // domains: ["images.unsplash.com", "class.unsplash.com"],
  },
};

export default nextConfig;
