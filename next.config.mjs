/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['react-leaflet', 'leaflet'],
  reactStrictMode: true,
};

export default nextConfig;