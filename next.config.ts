import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  },
  async redirects() {
  return [
    {
      source: "/:path*",
      has: [{ type: "host", value: "mayowadevv.vercel.app" }],
      destination: "https://www.mayowamakinde.dev/:path*",
      permanent: true,
    },
  ];
},
};

export default nextConfig;
