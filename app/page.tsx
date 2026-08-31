import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import WhyNyalkaran from "@/components/home/WhyNyalkaran";
import HowWeWork from "@/components/home/HowWeWork";
import FinalCTA from "@/components/home/FinalCTA";
import { HowWeGrow } from "@/components/home/HowWeWorkGrowth";

export const metadata: Metadata = {
  title: "Nyalkaran Technosoft LLP | Software, Web & Mobile Development",
  description:
    "Nyalkaran Technosoft LLP helps businesses build software, websites, mobile applications and digital solutions for growth.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HowWeGrow />
      <ServicesPreview />
      <WhyNyalkaran />
      <HowWeWork />
      <FinalCTA />
    </main>
  );
}
