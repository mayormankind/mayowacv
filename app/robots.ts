import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all well-behaved crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Google — full access
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Google Images
      {
        userAgent: "Googlebot-Image",
        allow: "/images/",
      },
      // Bing / Microsoft
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // ChatGPT / OpenAI web crawler
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // OpenAI search plugin crawler
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // ChatGPT user-browsing crawler
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Anthropic (Claude)
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Claude web crawler
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Common Crawl (used by many AI training sets and search tools)
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Meta AI (Llama)
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // You.com search
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Diffbot (AI-powered web data extraction)
      {
        userAgent: "Diffbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Bytespider (TikTok/ByteDance AI crawler)
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
