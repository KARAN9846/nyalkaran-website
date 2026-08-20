export default function AboutStory() {
  return (
    <section className="border-t border-[#E4E7EC] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Section Intro */}
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F65011]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#101828] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Technology should solve something.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              We believe digital solutions create the most value when they are
              built around the business, not the other way around.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F65011]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                Idea to Product
              </span>
            </div>
          </div>

          {/* Story Content */}
          <div>
            <p className="text-xl font-medium leading-8 tracking-[-0.02em] text-[#344054] sm:text-2xl sm:leading-9">
              Every business has its own goals, processes, challenges and
              opportunities. The right technology should fit those realities
              and help the business move forward.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <p className="text-base leading-7 text-[#667085]">
                Nyalkaran Technosoft LLP brings together software development,
                web development, mobile development and digital marketing to
                help businesses build, improve and grow their digital presence.
              </p>

              <p className="text-base leading-7 text-[#667085]">
                We combine business understanding, thoughtful design and
                practical technology to turn complex requirements into
                solutions that are clear, useful and ready to evolve.
              </p>
            </div>

            {/* Philosophy Block */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC]">
              <div className="grid sm:grid-cols-[auto_1fr]">
                <div className="flex items-center justify-center bg-[#101828] px-7 py-6 sm:px-8">
                  <span className="text-2xl font-bold tracking-[-0.04em] text-white">
                    01
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                    Our philosophy
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#101828] sm:text-2xl">
                    Understand the problem. Build the right solution.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667085]">
                    Good technology starts with clear thinking. We focus on
                    understanding what matters first, then choosing the right
                    way to turn that understanding into something useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}