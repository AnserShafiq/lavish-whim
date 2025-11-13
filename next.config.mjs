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
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

// Export using `export default`
export default nextConfig;