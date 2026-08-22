import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  "Software Development",
  "Web Development",
  "Mobile Development",
  "Digital Marketing",
];

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.1fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Nyalkaran Technosoft LLP home"
            >
              <Image
                src="/images/nyalkaran-logo-light.svg"
                alt="Nyalkaran Technosoft LLP"
                width={180}
                height={62}
                priority
                className="h-auto w-[180px]"
              />
            </Link>

            <p className="mt-7 text-sm leading-6 text-[#98A2B3]">
              Your Digital Growth &amp; Tech Partner. We build websites,
              software, mobile applications and digital solutions that help
              businesses move forward.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#F65011]" />

              <span className="text-xs font-medium text-white/70">Idea</span>

              <span aria-hidden="true" className="text-[#F65011]">
                →
              </span>

              <span className="text-xs font-semibold text-white">Product</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
              Explore
            </p>

            <nav aria-label="Footer navigation" className="mt-6">
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex text-sm text-[#98A2B3] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
              Services
            </p>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-[#98A2B3] transition-colors duration-200 hover:text-white">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:justify-self-end lg:max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
              Start a conversation
            </p>

            <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white">
              Have an idea in mind?
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#98A2B3]">
              Let&apos;s talk about the business problem, product or digital
              opportunity you want to solve.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#F65011] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_12px_30px_rgba(246,80,17,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828]"
            >
              Let&apos;s Talk
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 sm:mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[#667085] sm:text-sm">
              © 2026 Nyalkaran Technosoft LLP. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <span className="text-xs text-[#667085]">Software</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs text-[#667085]">Web</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs text-[#667085]">Mobile</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs text-[#667085]">Growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
