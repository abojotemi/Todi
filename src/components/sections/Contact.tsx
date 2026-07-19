import { Phone, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const contactItems = [
  {
    icon: Phone,
    label: "Direct Line",
    display: "+234-803-571-5616",
    href: "tel:+2348035715616",
    description: "Speak directly with our team",
  },
  {
    icon: Mail,
    label: "Email Inquiry",
    display: "info@todiandpartners.com",
    href: "mailto:info@todiandpartners.com",
    description: "We respond within one business day",
  },
  {
    icon: Globe,
    label: "Digital Portal",
    display: "www.todiandpartners.com.ng",
    href: "https://www.todiandpartners.com.ng",
    description: "Visit our full website",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-[#0b1829] dark:bg-[#0d1117] py-20 sm:py-14 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid opacity-[0.06] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-teal via-brand-primary-fixed-dim to-brand-teal"
      />

      <div className="relative max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal-dim mb-3">
              Reach Out
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-4xl sm:text-3xl font-bold text-white"
            >
              Connect With Us
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-lg mx-auto">
              Whether you need consultancy, equipment, or general supply our
              team is ready to assist.
            </p>
          </div>
        </FadeIn>

        {/* Cards — staggered */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12" role="list">
          {contactItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 100} direction="up">
              <li>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-col items-center text-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-teal/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal mb-5 group-hover:scale-110 group-hover:bg-brand-teal/25 transition-all duration-300">
                    <item.icon size={24} aria-hidden />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-brand-teal-dim mb-2">
                    {item.label}
                  </span>
                  <span className="text-base font-semibold text-white group-hover:underline">
                    {item.display}
                  </span>
                  <span className="text-xs text-white/50 mt-1">
                    {item.description}
                  </span>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>

        {/* CTA */}
        <FadeIn delay={300}>
          <div className="text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-brand-teal text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-brand-teal-dim active:scale-95 transition-all duration-200 shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/30"
            >
              Send Us a Message
              <ArrowRight
                size={16}
                aria-hidden
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
