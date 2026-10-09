import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all well-behaved crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Google — full access
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
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
        disallow: ["/api/"],
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/"],
      },
      // ChatGPT / OpenAI web crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // OpenAI search plugin crawler
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // ChatGPT user-browsing crawler
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Anthropic (Claude)
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Claude web crawler
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Common Crawl (used by many AI training sets and search tools)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Meta AI (Llama)
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      // You.com search
      {
        userAgent: "YouBot",
        allow: "/",
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // Diffbot (AI-powered web data extraction)
      {
        userAgent: "Diffbot",
        allow: "/",
      },
      // Bytespider (TikTok/ByteDance AI crawler)
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      // Google AI training crawler (separate from Search)
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Amazon AI crawler
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
