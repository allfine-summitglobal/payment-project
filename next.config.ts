import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sin1.contabostorage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
