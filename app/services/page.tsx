import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import SoftwareDevelopment from "@/components/services/SoftwareDevelopment";
import WebDevelopment from "@/components/services/WebDevelopment";
import MobileDevelopment from "@/components/services/MobileDevelopment";
import DigitalMarketing from "@/components/services/DigitalMarketing";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <SoftwareDevelopment />
      <WebDevelopment />
      <MobileDevelopment />
      <DigitalMarketing />
      <ServicesCTA />
    </main>
  );
}
