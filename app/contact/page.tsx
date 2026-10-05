import { Metadata } from "next";
import { BASE_URL, OG_IMAGE } from "@/lib/seo";
import { SITE } from "@/lib/site-config";
import { supabase } from "@/lib/supabase/server";
import AnimateIn from "@/components/ui/AnimateIn";
import JsonLd from "@/components/ui/JsonLd";
import ContactForm from "@/components/sections/ContactForm";
import { ContactDetails, ContactIntro } from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contact | Hire a Full-Stack Engineer",
  description:
    "Get in touch with Mayowa Makinde — Full-Stack Product Engineer available for SaaS development, product MVPs, full-stack contracts, and consulting. Based in Nigeria, working globally.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Mayowa Makinde | Hire a Full-Stack Engineer",
    description:
      "Available for SaaS development, product MVPs, full-stack contracts, and consulting. Let's build something together.",
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contact Mayowa Makinde — Full-Stack Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mayowa Makinde | Hire a Full-Stack Engineer",
    description:
      "Available for SaaS development, product MVPs, full-stack contracts, and consulting. Let's build something together.",
    images: [OG_IMAGE],
  },
};

export default async function ContactPage() {
  const { data } = await supabase
    .from("projects")
    .select("slug")
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(1);
  const featuredSlug = data?.[0]?.slug;

  return (
    <>
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${SITE.name}`,
          url: `${BASE_URL}/contact`,
          about: {
            "@type": "Person",
            name: SITE.name,
            email: SITE.email,
            telephone: SITE.phoneHref,
            jobTitle: SITE.role,
          },
        }}
      />
      <div className="max-w-7xl mx-auto pt-12 md:pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          {/* Left column: intro + details stacked */}
          <div className="order-1 lg:col-span-4 flex flex-col gap-12">
            <ContactIntro />
            <ContactDetails />
          </div>
          {/* Right column: form */}
          <AnimateIn
            direction="none"
            className="order-2 lg:col-span-8"
          >
            <ContactForm featuredSlug={featuredSlug} />
          </AnimateIn>
        </div>
      </div>
    </>
  );
}
