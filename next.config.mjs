// next.config.mjs  ← ES Module (correct for .mjs)

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'darkslategray-zebra-963297.hostingersite.com',
        pathname: '/products-images/**',
      },
    ],
  },
};

// Export using `export default`
export default nextConfig;