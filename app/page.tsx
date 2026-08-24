import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import WhyNyalkaran from "@/components/home/WhyNyalkaran";
import HowWeWork from "@/components/home/HowWeWork";
import FinalCTA from "@/components/home/FinalCTA";
import { HowWeGrow } from "@/components/home/HowWeWorkGrowth";

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
