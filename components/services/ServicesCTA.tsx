export default function ServicesCTA() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#101828] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* Subtle glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#F65011]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-[#F65011]/5 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                Ready to move forward?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build something that moves your business forward.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#98A2B3] sm:text-base sm:leading-7">
                Tell us what you want to build, improve or grow. We&apos;ll help
                you explore the right digital approach for your business.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F65011] px-6 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_14px_30px_rgba(246,80,17,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828]"
              >
                Start Your Project
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href="#"
                className="group inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold !text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-[#F65011]/40 hover:bg-[#F65011]/10 hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828]"
              >
                WhatsApp Us
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="relative mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#667085] sm:text-sm">
              Software · Web · Mobile · Digital Marketing
            </p>

            <p className="text-sm font-semibold text-white">
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
      </div>
    </section>
  );
}
