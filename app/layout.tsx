import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

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
