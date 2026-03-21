 "use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/technical', label: 'Technical' },
  { href: '/operations', label: 'Operations' },
  { href: '/supply-chain', label: 'Supply Chain' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/sds', label: 'Safety Data Sheets' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-clean shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 rounded mr-0">
          <Image
            src="/images/greenhills-logo.png"
            alt="Greenhills Chemicals Incorporated: Creative and Beautiful Logo"
            width={600}
            height={174}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-2">
          <ul className="flex items-center gap-3 flex-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md border border-brand-border bg-brand-light px-3 py-2 text-sm font-medium text-brand-anthracite transition-colors hover:border-brand-mint hover:bg-brand-mint/10 hover:text-brand-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-brand-mint px-3 py-2 text-sm font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-anthracite transition-colors hover:bg-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint md:hidden mr-4"
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-brand-border md:hidden">
          <ul className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md border border-brand-border bg-brand-light px-3 py-2 text-base font-medium text-brand-anthracite transition-colors hover:border-brand-mint hover:bg-brand-mint/10 hover:text-brand-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-md bg-brand-mint px-3 py-2 text-center text-base font-semibold text-brand-anthracite transition-colors hover:bg-brand-mint/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
