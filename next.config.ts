import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allow any path under this hostname
      },
      // Add other domains here if needed, e.g., via.placeholder.com
      // {
      //   protocol: 'https',
      //   hostname: 'via.placeholder.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
