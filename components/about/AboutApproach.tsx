import {
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export default function AboutApproach() {
  const capabilities: {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      number: "01",
      title: "Software",
      description:
        "Build the systems and business applications that support the way your organisation operates.",
      icon: Code2,
    },
    {
      number: "02",
      title: "Web",
      description:
        "Create professional digital experiences that represent your business and connect with your customers.",
      icon: Globe2,
    },
    {
      number: "03",
      title: "Mobile",
      description:
        "Extend your products and services into mobile experiences that are convenient, accessible and useful.",
      icon: Smartphone,
    },
    {
      number: "04",
      title: "Growth",
      description:
        "Use digital marketing, measurement and optimisation to help your digital presence reach the right audience.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-20 sm:px-8 sm:pt-16 sm:pb-24 lg:px-10 lg:pt-20 lg:pb-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
              Our Approach
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
              One partner for the digital journey.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 lg:justify-self-end">
            A business rarely needs just one piece of technology. We bring
            connected digital capabilities together so each part can support the
            bigger picture.
          </p>
        </div>

        {/* Main Statement */}
        <div className="mt-12 rounded-[2rem] bg-[#101828] p-7 sm:mt-14 sm:p-9 lg:mt-16 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                Connected capabilities
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                Technology works better when the pieces work together.
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#98A2B3] sm:text-base sm:leading-8">
                A website may be the front door to your business. Software may
                run the operations behind it. A mobile application may extend
                the experience, while digital marketing helps people discover
                it. We approach these capabilities as connected parts of one
                digital journey.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="text-sm font-semibold text-white">Idea</span>

              <span aria-hidden="true" className="text-xl text-[#F65011]">
                →
              </span>

              <span className="text-sm font-semibold text-white">Product</span>

              <span aria-hidden="true" className="text-xl text-[#F65011]">
                →
              </span>

              <span className="text-sm font-semibold text-white">Growth</span>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <li
                key={capability.number}
                className="group flex h-full flex-col rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/25 hover:bg-white hover:shadow-[0_18px_40px_rgba(16,24,40,0.07)] sm:p-7"
              >
                {/* Top Row: Number / Icon / Arrow */}
                <div className="grid grid-cols-3 items-center">
                  {/* Number */}
                  <div className="justify-self-start">
                    <span className="text-sm font-bold text-[#F65011]">
                      {capability.number}
                    </span>
                  </div>

                  {/* Service Icon */}
                  <div className="justify-self-center">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#667085] transition-all duration-300 group-hover:border-[#F65011]/25 group-hover:bg-[#F65011]/5 group-hover:text-[#F65011]"
                    >
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="justify-self-end">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E7EC] text-[#667085] transition-all duration-300 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white">
                      <ArrowUpRight size={15} strokeWidth={1.8} />
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="mt-8 text-xl font-bold tracking-[-0.02em] text-[#101828] transition-transform duration-300 group-hover:translate-x-1">
                  {capability.title}
                </h4>

                {/* Description */}
                <p className="mt-3 min-h-[120px] text-sm leading-6 text-[#667085] sm:min-h-[120px]">
                  {capability.description}
                </p>

                {/* Bottom Accent */}
                <div aria-hidden="true" className="mt-auto pt-6">
                  <div className="h-px w-full overflow-hidden bg-[#E4E7EC]">
                    <div className="h-full w-0 bg-[#F65011] transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
