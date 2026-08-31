import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us | Nyalkaran Technosoft LLP",
  description:
    "Get in touch with Nyalkaran Technosoft LLP to discuss software, web, mobile development and digital marketing solutions for your business.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
    </main>
  );
}
