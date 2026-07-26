import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mayowa Makinde — Full-Stack Product Engineer",
    short_name: "Mayowa.dev",
    description:
      "Portfolio of Mayowa Makinde — building scalable SaaS platforms, dashboards, and web applications with Next.js and React.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0d0d0d",
    theme_color: "#de1b1b",
    orientation: "portrait-primary",
    lang: "en",
    categories: ["portfolio", "technology", "developer"],
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Projects",
        short_name: "Projects",
        url: "/projects",
        description: "Browse portfolio projects and case studies",
        icons: [{ src: "/images/logo.png", sizes: "96x96", type: "image/png" }],
      },
      {
        name: "Contact",
        short_name: "Contact",
        url: "/contact",
        description: "Get in touch and start a project",
        icons: [{ src: "/images/logo.png", sizes: "96x96", type: "image/png" }],
      },
      {
        name: "About",
        short_name: "About",
        url: "/about",
        description: "Background, skills and experience",
        icons: [{ src: "/images/logo.png", sizes: "96x96", type: "image/png" }],
      },
    ],
  };
}
