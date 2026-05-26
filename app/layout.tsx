import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Metadata } from "next";
import JsonLd from "@/components/ui/JsonLd";
import { buildPersonSchema, buildWebsiteSchema, OG_IMAGE, BASE_URL, AUTHOR_NAME, AUTHOR_HANDLE } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mayowa | Full-Stack Product Engineer",
    template: "%s | Mayowa",
  },
  description:
    "Senior Full-Stack Engineer specializing in building high-performance SaaS platforms, data-driven dashboards, and scalable web applications with Next.js and React.",
  keywords: [
    "Full Stack Engineer",
    "Product Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "SaaS Architecture",
    "Frontend Engineering",
    "Software Engineer Nigeria",
    "Makinde Mayowa",
    "Node.js Developer",
    "Supabase",
    "Web Application Development",
  ],
  authors: [{ name: AUTHOR_NAME, url: BASE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  alternates: {
    canonical: BASE_URL,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Mayowa Portfolio",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mayowa - Full Stack Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayowa | Full-Stack Product Engineer",
    description:
      "Building scalable web applications and high-performance SaaS platforms.",
    creator: AUTHOR_HANDLE,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} bg-background text-white font-display`}
      >
        <JsonLd schema={buildWebsiteSchema()} />
        <JsonLd schema={buildPersonSchema()} />
        <div className="fixed inset-0 z-[-1] mesh-gradient" />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 px-6 md:px-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
