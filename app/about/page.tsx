import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutApproach from "@/components/about/AboutApproach";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Nyalkaran Technosoft LLP",
  description:
    "Learn about Nyalkaran Technosoft LLP, our approach, values and commitment to building practical technology solutions for businesses.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutApproach />
      <AboutCTA />
    </main>
  );
}
