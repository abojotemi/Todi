import { Phone, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  {
    Icon: Phone,
    label: "Direct Line",
    display: "+234-803-571-5616",
    href: "tel:+2348035715616",
    description: "Speak directly with our team",
  },
  {
    Icon: Mail,
    label: "Email Inquiry",
    display: "info@todiandpartners.com",
    href: "mailto:info@todiandpartners.com",
    description: "We respond within one business day",
  },
  {
    Icon: Globe,
    label: "Digital Portal",
    display: "www.todiandpartners.com",
    href: "https://www.todiandpartners.com",
    description: "Visit our full website",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#0b1829] dark:bg-[#0d1117] py-20 sm:py-14 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4">

        <FadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal-dim mb-2">
              Reach Out
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-4xl sm:text-3xl font-bold text-white"
            >
              Connect With Us
            </h2>
            <p className="mt-3 text-base text-white/60 max-w-lg">
              Whether you need consultancy, equipment, or general supply —
              our team is ready to assist.
            </p>
          </div>
        </FadeIn>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10" role="list">
          {contactItems.map(({ Icon, label, display, href, description, external }, i) => (
            <FadeIn key={label} delay={i * 80} direction="up">
              <li>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group block"
                >
                  <Card className="bg-white/5 border-white/10 shadow-none rounded-2xl group-hover:bg-white/10 group-hover:border-brand-teal/30 transition-all duration-300">
                    <CardContent className="flex flex-col gap-3 pt-6">
                      <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                        <Icon size={20} aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-1">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-white group-hover:underline">
                          {display}
                        </p>
                        <p className="text-xs text-white/40 mt-0.5">{description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={240}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-teal text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand-teal-dim active:scale-95 transition-all duration-200"
          >
            Send Us a Message
            <ArrowRight size={15} aria-hidden />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
