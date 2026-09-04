"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home", exact: true },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href, exact) {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-prose flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="AxiosLabs home">
          <Image
            src="/logo.svg"
            alt="AxiosLabs"
            width={120}
            height={32}
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(n.href, n.exact)
                  ? "text-brand bg-brand/10"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-brand text-brand-foreground px-5 py-2 text-sm font-medium shadow-elevated hover:opacity-95 transition"
          >
            Get in touch
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md h-10 w-10 text-primary hover:bg-muted"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded-md text-sm font-medium ${
                  isActive(n.href, n.exact) ? "text-brand bg-brand/10" : "text-foreground"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-gradient-brand text-brand-foreground px-5 py-3 text-sm font-medium"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
