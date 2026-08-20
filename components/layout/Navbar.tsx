"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "../ui/Container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E7EC]/80 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Nyalkaran Technosoft LLP home"
          >
            <div className="leading-none">
              <div className="font-[var(--font-manrope)] text-2xl font-extrabold tracking-tight text-[#F65011]">
                Nyalkaran
              </div>

              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#1D2939]">
                Technosoft LLP
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#344054] transition-colors duration-200 hover:text-[#F65011]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden items-center rounded-xl bg-[#F65011] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9430B] md:inline-flex"
          >
            Let's Talk
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex rounded-lg p-2 text-[#101828] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-[#E4E7EC] py-5 md:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[#344054] hover:bg-[#F8FAFC] hover:text-[#F65011]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-[#F65011] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Let's Talk
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}