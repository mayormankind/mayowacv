import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent content sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Block framing (clickjacking protection + SEO signal)
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Referrer policy — pass referrer to same-origin and origin on cross-origin
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissions policy — restrict unused browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Tell AI crawlers this content is indexable
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
      // Long-lived cache for static assets (images, fonts, etc.)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache public images
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // robots.txt and sitemap should be fresh
      {
        source: "/(robots.txt|sitemap.xml)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
