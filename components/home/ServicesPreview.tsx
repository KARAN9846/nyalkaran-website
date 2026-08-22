"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export function ServicesPreview() {
  const [activeService, setActiveService] = useState(0);

  const active = services[activeService];

  return (
    <section className="border-t border-[#E4E7EC] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
            What We Build
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#101828] sm:text-5xl">
            Technology that moves
            <br />
            <span className="text-[#F65011]">businesses forward.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base lg:mx-0">
            From business software to digital experiences and growth strategies,
            we help turn business requirements into practical digital solutions.
          </p>
        </div>

        {/* Main Services Layout */}
        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          {/* =====================================================
              SERVICE SELECTOR
          ====================================================== */}
          <div className="space-y-2">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <Link
                  key={service.number}
                  href={service.href}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  aria-label={`View ${service.title}`}
                  className={`group relative flex min-h-[60px] w-full items-center rounded-2xl border px-4 py-3.5 pr-12 text-left transition-all duration-200 sm:min-h-[68px] sm:px-5 lg:min-h-[72px] ${
                    isActive
                      ? "border-[#F65011]/20 bg-white shadow-[0_12px_35px_rgba(16,24,40,0.06)]"
                      : "border-transparent bg-transparent hover:border-[#E4E7EC] hover:bg-white"
                  }`}
                >
                  <span
                    className={`mr-4 shrink-0 text-xs font-bold ${
                      isActive ? "text-[#F65011]" : "text-[#98A2B3]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span
                    className={`min-w-0 flex-1 text-sm font-bold leading-5 sm:text-base lg:text-lg ${
                      isActive ? "text-[#101828]" : "text-[#667085]"
                    }`}
                  >
                    {service.title}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                      isActive
                        ? "text-[#F65011]"
                        : "text-[#D0D5DD] group-hover:translate-x-0.5 group-hover:-translate-y-[3px] group-hover:text-[#F65011]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          {/* =====================================================
              SERVICE DETAIL
          ====================================================== */}
          <div
            className="
              overflow-hidden
              rounded-[28px]
              bg-[#101828]
              p-6
              text-white
              shadow-[0_20px_60px_rgba(16,24,40,0.12)]
              sm:p-8
              lg:h-[520px]
              lg:p-9
            "
          >
            <div className="relative flex h-auto flex-col lg:h-full">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/15 blur-3xl" />

              {/* Card Header */}
              <div className="relative flex items-start justify-between">
                <span className="text-xs font-bold text-[#F65011] sm:text-sm">
                  {active.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 sm:h-11 sm:w-11">
                  <ArrowUpRight size={18} className="text-[#F65011]" />
                </div>
              </div>

              {/* Title + Description */}
              <div className="relative mt-7 lg:min-h-[150px]">
                <h3 className="max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
                  {active.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                  {active.description}
                </p>
              </div>

              {/* Features */}
              <div className="relative mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:mt-0">
                {active.items.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      min-h-[50px]
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-3.5
                      py-2.5
                    "
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F65011]/15">
                      <Check size={13} className="text-[#F65011]" />
                    </span>

                    <span className="text-xs leading-5 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="relative mt-7 border-t border-white/10 pt-5 lg:mt-auto">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white"
                >
                  Explore all services
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
