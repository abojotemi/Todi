"use client";

import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="w-full top-0 sticky bg-brand-surface-container-lowest border-b border-brand-secondary/20 z-50">
      <nav
        aria-label="Main navigation"
        className="max-w-[1200px] mx-auto flex justify-between items-center px-16 sm:px-6 max-sm:px-4 h-20"
      >
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-semibold font-serif text-brand-primary"
          aria-label="Todi & Partners home"
        >
          Todi &amp; Partners
        </Link>

        {/* Right cluster: theme toggle + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded flex items-center justify-center text-brand-secondary hover:text-brand-primary hover:bg-brand-surface-container transition-colors duration-200"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/contact"
            className="bg-brand-primary-container text-brand-on-primary text-sm font-semibold px-3 py-1 md:px-6 md:py-2.5 rounded-xl md:rounded-full hover:bg-brand-primary transition-colors duration-200 shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
