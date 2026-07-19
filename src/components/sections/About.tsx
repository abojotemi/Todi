import { MapPin, Award, Users, Building2 } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const highlights = [
  { icon: Award, label: "Regulatory Compliant" },
  { icon: Users, label: "Govt & Private Partners" },
  { icon: Building2, label: "Multi-City Presence" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-brand-surface-container-low py-20 sm:py-14 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 w-1/3 h-full bg-dot-grid opacity-[0.04] pointer-events-none"
      />

      <div className="relative max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image — slides from left */}
          <FadeIn direction="left" className="order-2 md:order-1">
            <div className="relative">
              <div className="relative h-[360px] sm:h-[440px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/15 group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT34_jwt0pT8Ny-6UxKekDGMcpYKr--pLlQrCuMic4ObeJG0DX0FHf9Yu_-TSR8Z6fSeBq_F6A3A_BcELR_aj-DrC23xiiWqt934apmbbz2sulUHRzaqTetObF14U0MztGuA8gfFXk4SGdFYpmS_-BZLX1WrKKucp6TqQeSiqC_bQF5VVcWPIZn32vXBI-EjAiaaY-kApp4Qh7_gm-WVJc1-rxZ7un4QJXYfIXAX1_ubu0vfnT3Y10"
                  alt="Todi & Partners corporate headquarters in Katampe Extension, Abuja"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 max-sm:hidden bg-brand-surface-container-lowest rounded-2xl shadow-xl shadow-brand-primary/10 border border-brand-secondary/10 px-6 py-4 flex items-center gap-6 whitespace-nowrap">
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-2 text-brand-primary">
                    <h.icon size={16} aria-hidden />
                    <span className="text-xs font-semibold">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Copy — slides from right */}
          <FadeIn direction="right" delay={100} className="order-1 md:order-2">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal">
                About Us
              </p>
              <h2
                id="about-heading"
                className="font-serif text-4xl sm:text-3xl font-bold text-brand-primary leading-tight"
              >
                Committed to Healthcare Excellence
              </h2>
              <div className="w-12 h-1 rounded-full bg-brand-teal" aria-hidden />
              <p className="text-lg leading-7 text-brand-on-surface-variant">
                Operating from our strategic headquarters in Katampe Extension,
                Abuja, Todi &amp; Partners stands as a pillar of reliability in
                the Nigerian medical sector.
              </p>
              <p className="text-base leading-7 text-brand-on-surface-variant">
                Our approach is grounded in formal rigour and an unwavering
                commitment to quality. We partner with government agencies,
                private hospitals, and specialised clinics to ensure that
                medical professionals have access to the knowledge and tools
                necessary to save lives.
              </p>
              <div className="mt-2 pt-6 border-t border-brand-secondary/15 space-y-3">
                <div className="flex items-start gap-3 text-brand-primary">
                  <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm font-semibold">
                    Main Office: Plot 497, Cadastral Zone B08, Jahi District, Abuja, Nigeria.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-brand-primary">
                  <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm font-semibold">
                    Branch: Plot 5A Block LVII, Off Sola Ajetomobi Street, Oba-Ile Housing Estate, Akure, Ondo State.
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
