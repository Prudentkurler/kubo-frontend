/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Fix for canvas issue in Konva on Next.js
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    // Ignore canvas module for client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig
