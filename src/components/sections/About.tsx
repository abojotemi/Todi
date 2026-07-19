import { MapPin, ShieldCheck, Award, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";

const highlights = [
  { Icon: ShieldCheck, label: "Regulatory Compliant",  sub: "NAFDAC & SON standards"          },
  { Icon: Award,       label: "Quality Assured",        sub: "ISO-aligned procurement"          },
  { Icon: Users,       label: "Multi-Sector Partners",  sub: "Govt, hospitals & clinics"        },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-brand-surface-container-low py-20 sm:py-14 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch">

          {/* ── Left panel ── */}
          <FadeIn direction="left" className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl min-h-[420px] flex flex-col items-center justify-center text-center gap-8 p-10 sm:p-8
                            bg-[#001e40] dark:bg-[#0d1117]">

              {/* Diagonal hatch texture */}
              <div aria-hidden className="absolute inset-0 bg-hatch opacity-[0.06]" />

              {/* Teal top border accent */}
              <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-brand-teal rounded-t-2xl" />

              <div className="relative z-10 flex flex-col items-center gap-7 w-full">

                {/* Company identity */}
                <div className="flex flex-col items-center gap-1">
                  <p className="font-serif text-2xl font-bold text-white leading-snug">
                    Todi &amp; Partners Ltd
                  </p>
                  <p className="text-sm text-white/50 tracking-wide">
                    Abuja, Nigeria
                  </p>
                </div>

                <Separator className="bg-white/10 w-24" />

                {/* Highlights */}
                <ul className="flex flex-col gap-4 w-full" role="list">
                  {highlights.map(({ Icon, label, sub }) => (
                    <li
                      key={label}
                      className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-brand-teal/15 border border-brand-teal/25 flex items-center justify-center text-brand-teal shrink-0">
                        <Icon size={16} aria-hidden />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-white leading-none mb-0.5">
                          {label}
                        </p>
                        <p className="text-xs text-white/45">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </FadeIn>

          {/* ── Right — copy ── */}
          <FadeIn direction="right" delay={100} className="order-1 md:order-2">
            <div className="flex flex-col gap-5 h-full justify-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal">
                About Us
              </p>
              <h2
                id="about-heading"
                className="font-serif text-4xl sm:text-3xl font-bold text-brand-primary leading-tight"
              >
                Committed to Healthcare Excellence
              </h2>
              <Separator className="w-10 bg-brand-teal h-[3px] rounded-full" />
              <p className="text-base leading-7 text-brand-on-surface-variant">
                Operating from our headquarters in Jahi District, Abuja,
                Todi &amp; Partners is a trusted name in the Nigerian medical
                sector. We partner with government agencies, private hospitals,
                and specialised clinics — giving medical professionals the
                knowledge and tools necessary to save lives.
              </p>
              <p className="text-sm leading-7 text-brand-on-surface-variant">
                Our approach is grounded in formal rigour, quality assurance,
                and an unwavering commitment to the highest standards of
                healthcare delivery.
              </p>

              <Separator className="bg-brand-secondary/15" />

              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-brand-on-surface-variant">
                    <span className="font-semibold text-brand-primary">Main Office: </span>
                    Plot 497, Cadastral Zone B08, Jahi District, Abuja, Nigeria.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-brand-on-surface-variant">
                    <span className="font-semibold text-brand-primary">Branch: </span>
                    Plot 5A Block LVII, Off Sola Ajetomobi Street, Oba-Ile Housing Estate, Akure, Ondo State.
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
