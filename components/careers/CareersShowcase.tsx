"use client";

import {
  Code2,
  Globe2,
  Mail,
  Search,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";

type CareerDomain = "all" | "web" | "mobile" | "software" | "digital";

type CareerOpening = {
  title: string;
  domain: Exclude<CareerDomain, "all">;
};

const domains = [
  {
    id: "web" as const,
    label: "Web",
    fullLabel: "Web Development",
    icon: Globe2,
  },
  {
    id: "mobile" as const,
    label: "Mobile",
    fullLabel: "Mobile Development",
    icon: Smartphone,
  },
  {
    id: "software" as const,
    label: "Software",
    fullLabel: "Software Development",
    icon: Code2,
  },
  {
    id: "digital" as const,
    label: "Digital",
    fullLabel: "Digital Marketing",
    icon: TrendingUp,
  },
];

const openings: CareerOpening[] = [
  {
    title: "Graphic Designer",
    domain: "digital",
  },
];

export default function CareersShowcase() {
  const [activeDomain, setActiveDomain] = useState<CareerDomain>("all");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredOpenings = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return openings.filter((opening) => {
      const matchesDomain =
        activeDomain === "all" || opening.domain === activeDomain;

      const matchesSearch =
        !query ||
        opening.title.toLowerCase().includes(query) ||
        domains
          .find((domain) => domain.id === opening.domain)
          ?.fullLabel.toLowerCase()
          .includes(query);

      return matchesDomain && matchesSearch;
    });
  }, [activeDomain, searchQuery]);

  const getDomainLabel = (domain: CareerOpening["domain"]) => {
    return domains.find((item) => item.id === domain)?.fullLabel ?? "";
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Intro */}
      <header className="mx-auto max-w-2xl text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-1 w-8 rounded-full bg-[#F65011]" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011]">
            Careers
          </span>

          <span className="h-1 w-8 rounded-full bg-[#F65011]" />
        </div>

        <h1 className="font-[var(--font-manrope)] text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl lg:text-[46px]">
          Grow with Nyalkaran.
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
          Explore opportunities across the digital and technology domains we
          work in.
        </p>
      </header>

      {/* Search & Filters */}
      <section
        aria-label="Search and filter career openings"
        className="mx-auto mt-10 max-w-4xl sm:mt-12"
      >
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-3 shadow-[0_8px_25px_rgba(16,24,40,0.05)] sm:p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative min-w-0 flex-1">
              <Search
                size={18}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                aria-hidden="true"
              />

              <label htmlFor="career-search" className="sr-only">
                Search career openings
              </label>

              <input
                id="career-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search roles..."
                className="h-11 w-full rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] pl-10 pr-4 text-sm text-[#101828] outline-none transition-all duration-200 placeholder:text-[#98A2B3] focus:border-[#F65011] focus:bg-white focus:ring-4 focus:ring-[#F65011]/10"
              />
            </div>

            {/* Domain filters */}
            <div
              className="flex shrink-0 gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Filter by career domain"
            >
              <button
                type="button"
                onClick={() => setActiveDomain("all")}
                aria-pressed={activeDomain === "all"}
                className={`whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeDomain === "all"
                    ? "bg-[#101828] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#475467] hover:bg-[#FFF4EF] hover:text-[#F65011]"
                }`}
              >
                All
              </button>

              {domains.map((domain) => {
                const Icon = domain.icon;
                const isActive = activeDomain === domain.id;

                return (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() => setActiveDomain(domain.id)}
                    aria-label={`Filter ${domain.fullLabel} openings`}
                    aria-pressed={isActive}
                    className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#F65011] text-white shadow-sm"
                        : "bg-[#F8FAFC] text-[#475467] hover:bg-[#FFF4EF] hover:text-[#F65011]"
                    }`}
                  >
                    <Icon size={14} strokeWidth={2} aria-hidden="true" />

                    {domain.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section
        aria-labelledby="career-openings"
        className="mx-auto mt-10 max-w-4xl sm:mt-12"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
              Opportunities
            </p>

            <h2
              id="career-openings"
              className="mt-1.5 font-[var(--font-manrope)] text-xl font-bold tracking-tight text-[#101828] sm:text-2xl"
            >
              Current openings
            </h2>
          </div>

          <span className="shrink-0 rounded-full bg-[#F2F4F7] px-3 py-1.5 text-xs font-medium text-[#667085]">
            {filteredOpenings.length}{" "}
            {filteredOpenings.length === 1 ? "opening" : "openings"}
          </span>
        </div>

        {filteredOpenings.length > 0 ? (
          <div className="space-y-4">
            {filteredOpenings.map((opening) => (
              <article
                key={`${opening.domain}-${opening.title}`}
                className="group relative overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_8px_25px_rgba(16,24,40,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/40 hover:shadow-[0_14px_35px_rgba(16,24,40,0.08)]"
              >
                {/* Orange accent */}
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#F65011] transition-all duration-300 group-hover:w-1.5" />

                <div className="p-5 pl-6 sm:p-6 sm:pl-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    {/* Role information */}
                    <div className="min-w-0">
                      <div className="mb-2.5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#FFF4EF] px-2.5 py-1 text-[11px] font-semibold text-[#F65011]">
                          {getDomainLabel(opening.domain)}
                        </span>

                        <span className="rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[11px] font-semibold text-[#027A48]">
                          Open Position
                        </span>
                      </div>

                      <h3 className="font-[var(--font-manrope)] text-xl font-bold tracking-tight text-[#101828] sm:text-2xl">
                        {opening.title}
                      </h3>

                      <p className="mt-1.5 text-sm text-[#667085]">
                        Send your resume and queries to:
                      </p>

                      <a
                        href="mailto:nyalkarantechnosoft@gmail.com"
                        className="mt-1 inline-block max-w-full break-all text-sm font-semibold text-[#F65011] transition-colors duration-200 hover:text-[#D9430B]"
                      >
                        nyalkarantechnosoft@gmail.com
                      </a>
                    </div>

                    {/* Email button */}
                    <a
                      href="mailto:nyalkarantechnosoft@gmail.com?subject=Career%20Query%20-%20Graphic%20Designer"
                      className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F65011] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_8px_20px_rgba(246,80,17,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 active:translate-y-0 md:w-auto"
                    >
                      <Mail size={16} strokeWidth={2} aria-hidden="true" />

                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D0D5DD] bg-white px-5 py-12 text-center sm:py-14">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#667085]">
              <Search size={18} aria-hidden="true" />
            </div>

            <h3 className="mt-3 text-base font-semibold text-[#101828]">
              No current openings
            </h3>

            <p className="mx-auto mt-1.5 max-w-md text-sm leading-6 text-[#667085]">
              No openings match your selected domain or search.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveDomain("all");
                setSearchQuery("");
              }}
              className="mt-4 text-sm font-semibold text-[#F65011] transition-colors hover:text-[#D9430B]"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
