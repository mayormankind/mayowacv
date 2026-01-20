import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Metadata } from "next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mayowacv.vercel.app"),
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
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayowacv.vercel.app",
    siteName: "Mayowa Portfolio",
    images: [
      {
        url: "/images/profile.png", // Ensure this image exists in public folder
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
    creator: "@RedMoonCoder",
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
