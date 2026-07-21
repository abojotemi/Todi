"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full top-0 sticky z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-surface-container-lowest/90 backdrop-blur-md border-b border-brand-secondary/20 shadow-sm shadow-brand-primary/5"
          : "bg-brand-surface-container-lowest border-b border-brand-secondary/20"
      )}
    >
      {/* Thin teal accent rule at very top */}
      <div className="h-[3px] w-full bg-brand-teal" aria-hidden />

      <nav
        aria-label="Main navigation"
        className="max-w-[1200px] mx-auto flex justify-between items-center px-16 sm:px-6 max-sm:px-4 h-20"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Todi & Partners home"
          className="flex items-center transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src="/todi_logo.png"
            alt="Todi & Partners Ltd"
            height={827}
            width={671}
            className="h-20 sm:h-11 md:h-12 w-auto dark:brightness-0 dark:invert"
            priority
          />
        </Link>

        {/* Right cluster: theme toggle + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center text-brand-secondary hover:text-brand-primary hover:bg-brand-surface-container transition-all duration-200 hover:rotate-12"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/contact"
            className="bg-brand-primary-container text-brand-on-primary text-sm font-semibold px-3 py-1 md:px-6 md:py-2.5 rounded-xl md:rounded-full hover:bg-brand-primary active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-brand-primary/20"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
