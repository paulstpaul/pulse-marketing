"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Color", href: "#color" },
  { label: "Typography", href: "#typography" },
  { label: "Components", href: "#components" },
  { label: "Patterns", href: "#patterns" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-ink-200 shadow-xs"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center gap-6 h-16" aria-label="Primary navigation">
          <Link href="/" aria-label="Pulse home">
            <Logo />
          </Link>

          <ul className="hidden md:flex items-center gap-1 ml-auto" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium text-ink-500 hover:text-ink-800 hover:bg-ink-100 px-3 py-1.5 rounded-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 ml-auto md:ml-4">
            <span className="font-mono text-[11px] text-ink-400 border border-ink-200 px-2 py-1 rounded-sm hidden sm:block">
              v1.0.0
            </span>
            <Button variant="primary" size="sm" asChild>
              <a href="#get-started">Get access</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
