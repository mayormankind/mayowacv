import { Metadata } from "next";
import { BASE_URL } from "@/lib/seo";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Mayowa Makinde | Hire a Full-Stack Engineer",
  description:
    "Get in touch with Mayowa Makinde — Full-Stack Product Engineer available for SaaS development, product MVPs, full-stack contracts, and consulting. Based in Nigeria, working globally.",
  keywords: [
    "Hire Full-Stack Engineer",
    "Contact Mayowa Makinde",
    "Full-Stack developer for hire",
    "SaaS developer Nigeria",
    "Freelance web developer",
    "Next.js developer for hire",
    "Remote full-stack engineer",
    "Product engineer Nigeria",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Mayowa Makinde | Hire a Full-Stack Engineer",
    description:
      "Available for SaaS development, product MVPs, full-stack contracts, and consulting. Let's build something together.",
    url: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
