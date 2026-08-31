import type { Metadata } from "next";

import CareersShowcase from "@/components/careers/CareersShowcase";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Careers | Nyalkaran Technosoft LLP",
  description:
    "Explore career opportunities at Nyalkaran Technosoft LLP across web, mobile, software development and digital marketing.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <section aria-label="Careers at Nyalkaran Technosoft">
        <Container>
          <div className="py-14 sm:py-20 lg:py-24">
            <CareersShowcase />
          </div>
        </Container>
      </section>
    </main>
  );
}
