// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { Container } from "@/components/ui/Container";
// import { services } from "@/data/services";

// export function ServicesPreview() {
//   const [activeService, setActiveService] = useState(0);
//   const active = services[activeService];

//   return (
//     <section className="border-t border-[#E4E7EC] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
//       <Container>
//         {/* Section Header */}
//         <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
//           <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
//             What We Build
//           </p>

//           <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#101828] sm:text-5xl">
//             Technology that moves
//             <br />
//             <span className="text-[#F65011]">businesses forward.</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base lg:mx-0">
//             From business software to digital experiences and growth strategies,
//             we help turn business requirements into practical digital solutions.
//           </p>
//         </div>

//         {/* Main Services Layout */}
//         <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
//           {/* =====================================================
//               SERVICE SELECTOR
//           ====================================================== */}
//           <div className="space-y-2">
//             {services.map((service, index) => {
//               const isActive = activeService === index;

//               return (
//                 <Link
//                   key={service.number}
//                   href={service.href}
//                   onMouseEnter={() => setActiveService(index)}
//                   onFocus={() => setActiveService(index)}
//                   aria-label={`View ${service.title}`}
//                   className={`group relative flex min-h-[60px] w-full items-center rounded-2xl border px-4 py-3.5 pr-12 text-left transition-all duration-200 sm:min-h-[68px] sm:px-5 lg:min-h-[72px] ${
//                     isActive
//                       ? "border-[#F65011]/20 bg-white shadow-[0_12px_35px_rgba(16,24,40,0.06)]"
//                       : "border-transparent bg-transparent hover:border-[#E4E7EC] hover:bg-white"
//                   }`}
//                 >
//                   <span
//                     className={`mr-4 shrink-0 text-xs font-bold ${
//                       isActive ? "text-[#F65011]" : "text-[#98A2B3]"
//                     }`}
//                   >
//                     {service.number}
//                   </span>

//                   <span
//                     className={`min-w-0 flex-1 text-sm font-bold leading-5 sm:text-base lg:text-lg ${
//                       isActive ? "text-[#101828]" : "text-[#667085]"
//                     }`}
//                   >
//                     {service.title}
//                   </span>

//                   <ArrowUpRight
//                     size={17}
//                     className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
//                       isActive
//                         ? "text-[#F65011]"
//                         : "text-[#D0D5DD] group-hover:translate-x-0.5 group-hover:-translate-y-[3px] group-hover:text-[#F65011]"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* =====================================================
//               COMPACT IMAGE-FIRST SERVICE CARD
//           ====================================================== */}
//           <div
//             className="
//               overflow-hidden
//               rounded-[28px]
//               bg-[#101828]
//               text-white
//               shadow-[0_20px_60px_rgba(16,24,40,0.12)]
//             "
//           >
//             {/* Service Image */}
//             <div className="relative h-[220px] overflow-hidden rounded-t-[28px] bg-white sm:h-[240px] lg:h-[260px]">
//               {active.image ? (
//                 <div className="flex h-full w-full items-center justify-center">
//                   <Image
//                     src={active.image}
//                     alt={active.imageAlt ?? active.title}
//                     width={800}
//                     height={450}
//                     priority={activeService === 0}
//                     sizes="(min-width: 1024px) 700px, (min-width: 640px) 600px, 100vw"
//                     className="h-[86%] w-[86%] object-contain"
//                   />
//                 </div>
//               ) : (
//                 <div
//                   aria-hidden="true"
//                   className="flex h-full items-center justify-center bg-[#172033]"
//                 >
//                   <span className="text-sm font-medium text-white/40">
//                     Service image coming soon
//                   </span>
//                 </div>
//               )}

//               {/* Image Overlay */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101828]/20 via-transparent to-transparent"
//               />
//             </div>

//             {/* Service Information */}
//             <div className="relative p-5 sm:p-6 lg:p-7">
//               {/* Decorative Glow */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/10 blur-3xl"
//               />

//               <div className="relative">
//                 {/* Number + Arrow */}
//                 <div className="flex items-start justify-between">
//                   <span className="text-xs font-bold text-[#F65011] sm:text-sm">
//                     {active.number}
//                   </span>

//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 sm:h-10 sm:w-10">
//                     <ArrowUpRight size={17} className="text-[#F65011]" />
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-[1.08] tracking-tight sm:text-3xl">
//                   {active.title}
//                 </h3>

//                 {/* Compact Description */}
//                 <p className="mt-2.5 max-w-xl text-sm leading-6 text-white/60">
//                   {active.description}
//                 </p>

//                 {/* CTA */}
//                 <div className="mt-4 border-t border-white/10 pt-3.5">
//                   <Link
//                     href={active.href}
//                     className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-200 hover:text-[#F65011]"
//                   >
//                     Explore {active.title}
//                     <ArrowUpRight
//                       size={16}
//                       className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
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
                  className={`group relative flex min-h-[60px] w-full items-center rounded-2xl border px-4 py-3.5 pr-12 text-left transition-[border-color,background-color,box-shadow] duration-200 sm:min-h-[68px] sm:px-5 lg:min-h-[72px] ${
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
              COMPACT IMAGE-FIRST SERVICE CARD
          ====================================================== */}
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border border-[#E4E7EC]
              bg-[#101828]
              text-white
              shadow-[0_24px_70px_rgba(16,24,40,0.10)]
            "
          >
            {/* Service Image */}
            <div className="group relative h-[220px] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-white via-[#F9FAFB] to-[#F3F4F6] sm:h-[240px] lg:h-[260px]">
              {active.image ? (
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={active.image}
                    alt={active.imageAlt ?? active.title}
                    width={800}
                    height={450}
                    priority={activeService === 0}
                    sizes="(min-width: 1024px) 700px, (min-width: 640px) 600px, 100vw"
                    className="h-[86%] w-[86%] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full items-center justify-center bg-[#172033]"
                >
                  <span className="text-sm font-medium text-white/40">
                    Service image coming soon
                  </span>
                </div>
              )}

              {/* Image Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101828]/20 via-transparent to-transparent"
              />
            </div>

            {/* Service Information */}
            <div className="relative p-5 sm:p-6 lg:p-7">
              {/* Decorative Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/10 blur-3xl"
              />

              <div className="relative">
                {/* Number + Arrow */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[#F65011] sm:text-sm">
                    {active.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors duration-200 sm:h-10 sm:w-10">
                    <ArrowUpRight size={17} className="text-[#F65011]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-[1.08] tracking-tight sm:text-3xl">
                  {active.title}
                </h3>

                {/* Compact Description */}
                <p className="mt-2.5 max-w-xl text-sm leading-6 text-white/60">
                  {active.description}
                </p>

                {/* CTA */}
                <div className="mt-4 border-t border-white/10 pt-3.5">
                  <Link
                    href={active.href}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-200 hover:text-[#F65011]"
                  >
                    Explore {active.title}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
