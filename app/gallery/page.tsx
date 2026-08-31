import type { Metadata } from "next";

import GalleryShowcase from "@/components/gallery/GalleryShowcase";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gallery | Nyalkaran Technosoft LLP",
  description:
    "Explore the people, culture and work environment behind Nyalkaran Technosoft LLP.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <section aria-label="Nyalkaran Technosoft gallery">
        <Container>
          <div className="py-14 sm:py-20 lg:py-24">
            <GalleryShowcase />
          </div>
        </Container>
      </section>
    </main>
  );
}
