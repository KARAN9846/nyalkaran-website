export default function AboutValues() {
  const values = [
    {
      number: "01",
      title: "Understand Before Building",
      description:
        "Start with the business, the people and the outcome before choosing the technology.",
    },
    {
      number: "02",
      title: "Keep Technology Practical",
      description:
        "Build solutions that simplify work, improve experiences and create useful business value.",
    },
    {
      number: "03",
      title: "Design for People",
      description:
        "Create digital experiences that are clear, intuitive and easy for people to use.",
    },
    {
      number: "04",
      title: "Build for What Comes Next",
      description:
        "Create solutions that can adapt as the business grows and new opportunities appear.",
    },
  ];

  return (
    <section className="border-t border-[#E4E7EC] bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
              What We Believe
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Principles behind the way we build.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 lg:justify-self-end">
            Good technology comes from clear thinking, empathy for users and a
            commitment to solving the right problem.
          </p>
        </div>

        {/* Values */}
        <ol className="mt-10 divide-y divide-[#E4E7EC] overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white sm:mt-12">
          {values.map((value) => (
            <li
              key={value.number}
              className="group relative grid gap-5 px-5 py-6 transition-all duration-300 ease-out hover:bg-[#FFFCFA] sm:grid-cols-[72px_1fr_auto] sm:items-center sm:gap-8 sm:px-7 sm:py-7 lg:px-8"
            >
              {/* Number */}
              <div className="flex items-center">
                <span className="text-3xl font-bold tracking-[-0.06em] text-[#101828]/10 transition-colors duration-300 group-hover:text-[#F65011]/35 sm:text-4xl">
                  {value.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold tracking-[-0.02em] text-[#101828] transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                  {value.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667085]">
                  {value.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E7EC] text-sm text-[#667085] transition-all duration-300 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white">
                <span aria-hidden="true">↗</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}