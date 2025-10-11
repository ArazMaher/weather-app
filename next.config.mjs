/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['react-leaflet', 'leaflet'],
  reactStrictMode: true,
};

export default nextConfig;