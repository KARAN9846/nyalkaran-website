export default function SoftwareDevelopment() {
  const capabilities = [
    {
      number: "01",
      title: "Custom Business Software",
      description:
        "Purpose-built software designed around the way your business actually works, rather than forcing your processes into a generic system.",
    },
    {
      number: "02",
      title: "Enterprise Applications",
      description:
        "Connected digital systems that help teams manage information, operations and complex business workflows more effectively.",
    },
    {
      number: "03",
      title: "CRM & ERP Solutions",
      description:
        "Centralised platforms that bring customers, operations, information and business processes together in one connected environment.",
    },
    {
      number: "04",
      title: "Business Automation",
      description:
        "Reduce repetitive work and improve efficiency with intelligent workflows, integrations and automation designed around your processes.",
    },
    {
      number: "05",
      title: "AI-Enabled Solutions",
      description:
        "Integrate practical AI capabilities where they can improve decision-making, automation, customer experiences or operational efficiency.",
    },
    {
      number: "06",
      title: "System Integration",
      description:
        "Connect important business systems and digital tools so information can move smoothly across your organisation.",
    },
  ];

  return (
    <section
      id="software-development"
      className="border-t border-[#E4E7EC] bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#F65011] px-2 text-[11px] font-bold text-white">
                01
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011]">
                Software Development
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
              Digital systems designed around your business.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-[#344054] sm:text-lg sm:leading-8">
              We build software that helps businesses manage operations,
              simplify workflows, connect information and create better ways
              of working.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
              From focused business applications to larger digital platforms,
              we combine practical thinking, modern technology and intelligent
              capabilities to create solutions that can grow with your
              organisation.
            </p>
          </div>
        </div>

        {/* Main Feature */}
        <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#101828] sm:mt-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Main message */}
            <div className="relative p-7 sm:p-9 lg:p-11">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F65011]/10 blur-3xl"
              />

              <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                Built around the business
              </p>

              <h3 className="relative mt-4 max-w-2xl text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                Turn complex business requirements into software people can
                actually use.
              </h3>

              <p className="relative mt-5 max-w-2xl text-sm leading-7 text-[#98A2B3] sm:text-base sm:leading-8">
                Good business software should make work clearer, faster and
                more connected. We focus on understanding the workflow first,
                then building the digital system around it.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {[
                  "Workflow Automation",
                  "AI Capabilities",
                  "Business Intelligence",
                  "System Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-[#D0D5DD]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome panel */}
            <div className="border-t border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-11">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                What it can improve
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Reduce repetitive manual work",
                  "Centralise important information",
                  "Improve operational visibility",
                  "Connect teams and systems",
                  "Create better customer workflows",
                  "Prepare the business for future growth",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F65011]/15 text-[10px] font-bold text-[#F65011]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-6 text-[#D0D5DD]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                Capabilities
              </p>

              <p className="mt-1 text-sm text-[#667085]">
                Built around real business needs.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="hidden h-px w-20 bg-[#E4E7EC] sm:block"
            />
          </div>

          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <li
                key={capability.number}
                className="group rounded-2xl border border-[#E4E7EC] bg-white p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#F65011]/25 hover:shadow-[0_16px_35px_rgba(16,24,40,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F65011]">
                    {capability.number}
                  </span>

                  <span className="text-sm text-[#98A2B3] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#F65011]">
                    ↗
                  </span>
                </div>

                <h4 className="mt-6 text-lg font-bold tracking-[-0.02em] text-[#101828] transition-transform duration-500 group-hover:translate-x-1">
                  {capability.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {capability.description}
                </p>

                <div className="mt-5 h-px overflow-hidden bg-[#E4E7EC]">
                  <div className="h-full w-0 bg-[#F65011] transition-all duration-700 ease-out group-hover:w-full" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}