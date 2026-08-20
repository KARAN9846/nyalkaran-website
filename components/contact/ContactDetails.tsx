export default function ContactDetails() {
  const contactOptions = [
    {
      number: "01",
      title: "Call Us",
      value: "+91 XXX XXX XXXX",
      description: "Talk directly with our team about your requirement.",
      href: "tel:+91XXXXXXXXXX",
      action: "Call Now",
    },
    {
      number: "02",
      title: "WhatsApp",
      value: "+91 XXX XXX XXXX",
      description: "Send us a quick message and start the conversation.",
      href: "#",
      action: "WhatsApp Us",
    },
    {
      number: "03",
      title: "Email",
      value: "hello@nyalkaran.com",
      description: "Share your project details and we'll get back to you.",
      href: "mailto:hello@nyalkaran.com",
      action: "Send Email",
    },
  ];

  return (
    <section className="border-t border-[#E4E7EC] bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
          {/* Intro */}
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
              Other Ways to Reach Us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl">
              Prefer a direct conversation?
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              Choose the way that works best for you. Whether it's a call, a
              WhatsApp message or email, we're ready to hear what you want to
              build.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
                Business hours
              </p>

              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#101828]">
                  Monday – Saturday
                </span>

                <span className="text-sm text-[#667085]">
                  10:00 AM – 7:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Contact options */}
          <div className="grid gap-3">
            {contactOptions.map((option) => (
              <a
                key={option.number}
                href={option.href}
                className="group relative overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-5 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[#F65011]/25 hover:shadow-[0_16px_35px_rgba(16,24,40,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF3EE] text-xs font-bold text-[#F65011] transition-all duration-500 group-hover:bg-[#F65011] group-hover:text-white">
                      {option.number}
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#98A2B3]">
                        {option.title}
                      </p>

                      <p className="mt-1 text-lg font-bold tracking-[-0.02em] text-[#101828] transition-transform duration-500 group-hover:translate-x-1">
                        {option.value}
                      </p>

                      <p className="mt-1.5 text-sm leading-6 text-[#667085]">
                        {option.description}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#D0D5DD] bg-[#F8FAFC] px-4 py-2.5 text-xs font-semibold text-[#344054] transition-all duration-500 group-hover:border-[#F65011]/30 group-hover:bg-[#FFF8F5] group-hover:text-[#F65011]">
                    {option.action}
                    <span
                      aria-hidden="true"
                      className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
