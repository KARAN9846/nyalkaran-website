export default function ServicesOverview() {
  const services = [
    {
      number: "01",
      title: "Software Development",
      description:
        "Custom digital systems that streamline operations, manage information and solve complex workflows.",
      points: [
        "Custom Software",
        "Enterprise Applications",
        "CRM & ERP",
        "Business Automation",
      ],
      href: "#software-development",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "High-quality digital experiences built to represent your business, serve customers and support growth.",
      points: [
        "Corporate Websites",
        "Web Applications",
        "E-commerce",
        "Portals",
      ],
      href: "#web-development",
    },
    {
      number: "03",
      title: "Mobile Development",
      description:
        "Mobile products that bring your services, workflows and customer experiences closer to your users.",
      points: [
        "Android",
        "iOS",
        "Cross-platform",
        "Connected Experiences",
      ],
      href: "#mobile-development",
    },
    {
      number: "04",
      title: "Digital Marketing",
      description:
        "Data-informed digital growth strategies that help businesses reach the right audience and create opportunity.",
      points: [
        "SEO",
        "Social Media",
        "Performance Marketing",
        "Content & Analytics",
      ],
      href: "#digital-marketing",
    },
  ];

  return (
    <section id="services" className="border-t border-[#E4E7EC] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                What We Do
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
              Technology built around your business.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 lg:pb-1">
            From software and digital experiences to mobile products and
            growth, our capabilities can work independently or together around
            one business goal.
          </p>
        </div>

        {/* Services Grid */}
        <ol className="mt-9 grid gap-4 sm:mt-10 lg:grid-cols-2">
          {services.map((service) => (
            <li key={service.number}>
              <a
                href={service.href}
                className={[
                  "group relative block min-h-full overflow-hidden rounded-[1.75rem] border outline-none",
                  "transition-all duration-500 ease-out",
                  "focus-visible:ring-2 focus-visible:ring-[#F65011]/40 focus-visible:ring-offset-2",
                  "border-[#E4E7EC] bg-[#F8FAFC] text-[#101828]",
                  "hover:-translate-y-1 hover:border-[#101828] hover:bg-[#101828] hover:text-white hover:shadow-[0_20px_45px_rgba(16,24,40,0.16)]",
                  "active:-translate-y-1 active:border-[#101828] active:bg-[#101828] active:text-white active:shadow-[0_20px_45px_rgba(16,24,40,0.16)]",
                ].join(" ")}
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-700 group-hover:bg-[#F65011]/10 group-active:bg-[#F65011]/10"
                />

                <div className="relative p-5 sm:p-7 lg:p-8">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-[#F65011]/20 bg-white px-2 text-[11px] font-bold text-[#F65011] transition-all duration-500 group-hover:bg-[#F65011] group-hover:text-white group-active:bg-[#F65011] group-active:text-white"
                    >
                      {service.number}
                    </span>

                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D0D5DD] bg-white text-sm text-[#667085] transition-all duration-500 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white group-active:border-[#F65011] group-active:bg-[#F65011] group-active:text-white"
                    >
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </span>
                  </div>

                  {/* Heading */}
                  <div className="mt-7 max-w-2xl">
                    <h3
                      className="text-2xl font-bold tracking-[-0.035em] text-[#101828] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-white group-active:translate-x-1 group-active:text-white sm:text-[1.75rem]"
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mt-2 max-w-xl text-sm leading-6 text-[#667085] transition-colors duration-500 group-hover:text-[#98A2B3] group-active:text-[#98A2B3] sm:text-[15px] sm:leading-7"
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-[#E4E7EC] bg-white px-3 py-1.5 text-[11px] font-medium text-[#667085] transition-all duration-500 group-hover:border-[#F65011]/30 group-hover:bg-white/[0.04] group-hover:text-white group-active:border-[#F65011]/30 group-active:bg-white/[0.04] group-active:text-white"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom */}
                  <div
                    className="mt-7 flex items-center justify-between border-t border-[#E4E7EC] pt-4 transition-colors duration-500 group-hover:border-white/10 group-active:border-white/10"
                  >
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#98A2B3] transition-colors duration-500 group-hover:text-[#F65011] group-active:text-[#F65011]"
                    >
                      Explore service
                    </span>

                    <span
                      className="h-1 w-10 overflow-hidden rounded-full bg-[#E4E7EC] transition-all duration-700 group-hover:w-16 group-hover:bg-white/10 group-active:w-16 group-active:bg-white/10"
                    >
                      <span className="block h-full w-full rounded-full bg-[#F65011]" />
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>

        {/* Bottom message */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[#E4E7EC] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[#98A2B3] sm:text-sm">
            Need more than one capability? We connect technology, automation,
            digital experiences and growth around the right business objective.
          </p>

          <p className="shrink-0 text-sm font-semibold text-[#101828]">
            Idea
            <span aria-hidden="true" className="mx-2 text-[#F65011]">
              →
            </span>
            Product
            <span aria-hidden="true" className="mx-2 text-[#F65011]">
              →
            </span>
            Growth
          </p>
        </div>
      </div>
    </section>
  );
}
