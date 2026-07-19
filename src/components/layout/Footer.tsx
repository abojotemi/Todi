import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Medical Compliance", href: "#" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1829] dark:bg-[#0d1117]">
      {/* Teal top rule */}
      <div
        className="h-1 w-full bg-gradient-to-r from-brand-teal via-brand-primary-fixed-dim to-brand-teal"
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/10">
          {/* Brand + contact */}
          <div className="flex flex-col gap-5 max-w-sm">
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-white"
              aria-label="Todi & Partners home"
            >
              Todi &amp; Partners
            </Link>
            <p className="text-sm text-white/60 leading-6">
              Pioneering excellence in medical consultancy and equipment supply
              across Nigeria.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+2348035715616"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand-teal-dim transition-colors"
              >
                <Phone size={14} aria-hidden />
                +234-803-571-5616
              </a>
              <a
                href="mailto:info@todiandpartners.com"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand-teal-dim transition-colors"
              >
                <Mail size={14} aria-hidden />
                info@todiandpartners.com
              </a>
              <span className="inline-flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden />
                Abuja Office: Plo497, Cadastral Zone BO8, Jahi District Abuja,
                Nigeria.
              </span>
              <span className="inline-flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden />
                Branch: Plot 5A Block LVII, Off Sola Ajetomobi Street, Oba-Ile
                Housing Estate, Akure, Ondo State, Nigeria.
              </span>
            </div>
          </div>

          {/* Legal links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-teal-dim mb-5">
              Legal
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Todi &amp; Partners Ltd. All
            Rights Reserved. Registered in Nigeria.
          </p>
          <p className="text-xs text-white/30">
            Medical Consultancy &amp; Equipment Supply
          </p>
        </div>
      </div>
    </footer>
  );
}
