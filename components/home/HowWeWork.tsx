// export default function HowWeWork() {
//   const steps = [
//     {
//       number: "01",
//       title: "Discover",
//       description:
//         "We understand your business, goals, challenges and requirements before defining the solution.",
//     },
//     {
//       number: "02",
//       title: "Plan",
//       description:
//         "We turn your requirements into a clear roadmap with the right technology, scope and direction.",
//     },
//     {
//       number: "03",
//       title: "Design",
//       description:
//         "We shape the user experience and interface so the final product is clear, useful and engaging.",
//     },
//     {
//       number: "04",
//       title: "Develop",
//       description:
//         "We build reliable, scalable technology with a strong focus on quality, performance and usability.",
//     },
//     {
//       number: "05",
//       title: "Launch",
//       description:
//         "We test, refine and prepare the solution for a smooth launch and a confident start.",
//     },
//     {
//       number: "06",
//       title: "Grow",
//       description:
//         "We continue improving the digital solution as your business evolves and new opportunities emerge.",
//     },
//   ];

//   return (
//     <section className="bg-[#101828] text-white">
//       <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
//         {/* Heading */}
//         <div className="max-w-3xl">
//           <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F65011]">
//             How We Work
//           </p>

//           <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
//             From first conversation to continuous growth.
//           </h2>

//           <p className="mt-6 max-w-2xl text-base leading-7 text-[#98A2B3] sm:text-lg sm:leading-8">
//             A clear process keeps every project focused, collaborative and
//             moving toward the right outcome.
//           </p>
//         </div>

//         {/* Desktop Journey */}
//         <div className="mt-16 hidden lg:block">
//           <div className="relative">
//             {/* Connecting line */}
//             <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />

//             <div className="grid grid-cols-6 gap-6">
//               {steps.map((step) => (
//                 <div key={step.number} className="group relative">
//                   {/* Step indicator */}
//                   <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#101828] text-xs font-bold text-[#F65011] transition-all duration-300 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white">
//                     {step.number}
//                   </div>

//                   <div className="mt-8">
//                     <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
//                       {step.number}
//                     </p>

//                     <h3 className="mt-2 text-xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
//                       {step.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-6 text-[#98A2B3]">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile / Tablet Journey */}
//         <div className="mt-14 lg:hidden">
//           <div className="relative">
//             {/* Connecting line */}
//             <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10" />

//             <div className="space-y-10">
//               {steps.map((step) => (
//                 <div key={step.number} className="group relative flex gap-6">
//                   {/* Step indicator */}
//                   <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#101828] text-xs font-bold text-[#F65011] transition-all duration-300 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white">
//                     {step.number}
//                   </div>

//                   <div className="pb-1">
//                     <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
//                       Step {step.number}
//                     </p>

//                     <h3 className="mt-2 text-xl font-bold text-white">
//                       {step.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-6 text-[#98A2B3]">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your business, goals, challenges and requirements before defining the right solution.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We turn requirements into a clear roadmap with the right technology, scope and direction.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We shape the experience and interface so the final product is clear, useful and engaging.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "We build reliable technology with a strong focus on quality, performance and usability.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "We test, refine and prepare the solution for a smooth launch and a confident start.",
    },
    {
      number: "06",
      title: "Grow",
      description:
        "We continue improving the solution as your business evolves and new opportunities emerge.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#101828] text-white">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#F65011]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#F65011]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F65011]">
              How We Work
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              A clear path from idea to impact.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#98A2B3] sm:text-lg sm:leading-8 lg:justify-self-end">
            Great digital products are built through the right process. We
            combine business understanding, thoughtful design and reliable
            technology to move every project forward with purpose.
          </p>
        </div>

        {/* Process */}
        <ol className="relative mt-16 grid gap-4 sm:mt-20 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
          {steps.map((step, index) => (
            <li
              key={step.number}
              tabIndex={0}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/30 hover:bg-white/[0.055] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828] active:-translate-y-0.5 active:border-[#F65011]/40 active:bg-white/[0.055] sm:p-7 lg:p-8"
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-500 group-hover:bg-[#F65011]/10 group-focus-visible:bg-[#F65011]/10 group-active:bg-[#F65011]/10"
              />

              {/* Top row */}
              <div className="relative flex items-start justify-between gap-4">
                <span className="text-4xl font-bold tracking-[-0.06em] text-white/10 transition-colors duration-300 group-hover:text-[#F65011]/30 group-focus-visible:text-[#F65011]/30 group-active:text-[#F65011]/30 sm:text-5xl">
                  {step.number}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#F65011] transition-all duration-300 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white group-focus-visible:border-[#F65011] group-focus-visible:bg-[#F65011] group-focus-visible:text-white group-active:border-[#F65011] group-active:bg-[#F65011] group-active:text-white">
                  <span className="text-sm">↗</span>
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-10">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-active:translate-x-1">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#98A2B3]">
                  {step.description}
                </p>
              </div>

              {/* Bottom progress line */}
              <div className="relative mt-8 h-px overflow-hidden bg-white/10">
                <div className="h-full w-0 bg-[#F65011] transition-all duration-500 ease-out group-hover:w-full group-focus-visible:w-full group-active:w-full" />
              </div>
            </li>
          ))}
        </ol>

        {/* Closing statement */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#98A2B3]">
              From the first conversation to the next stage of growth.
            </p>

            <p className="text-sm font-semibold text-white">
              Idea <span className="mx-2 text-[#F65011]">→</span> Product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
