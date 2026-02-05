import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/smm-portfolio" : "",
  assetPrefix: isProd ? "/smm-portfolio/" : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dwkfvnq5q/**",
      },
    ],
  },
};

export default nextConfig;
