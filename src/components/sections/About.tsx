import { MapPin } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-brand-surface-container-low py-20 sm:py-14 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Image */}
          <FadeIn direction="left" className="order-2 md:order-1">
            <div className="relative h-[360px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT34_jwt0pT8Ny-6UxKekDGMcpYKr--pLlQrCuMic4ObeJG0DX0FHf9Yu_-TSR8Z6fSeBq_F6A3A_BcELR_aj-DrC23xiiWqt934apmbbz2sulUHRzaqTetObF14U0MztGuA8gfFXk4SGdFYpmS_-BZLX1WrKKucp6TqQeSiqC_bQF5VVcWPIZn32vXBI-EjAiaaY-kApp4Qh7_gm-WVJc1-rxZ7un4QJXYfIXAX1_ubu0vfnT3Y10"
                alt="Todi & Partners office in Abuja"
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn direction="right" delay={100} className="order-1 md:order-2">
            <div className="flex flex-col gap-5">
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
                Todi &amp; Partners is a trusted name in the Nigerian medical sector.
                We partner with government agencies, private hospitals, and
                specialised clinics — giving medical professionals the knowledge
                and tools necessary to save lives.
              </p>
              <p className="text-sm leading-7 text-brand-on-surface-variant">
                Our approach is grounded in formal rigour, quality assurance,
                and an unwavering commitment to the highest standards of
                healthcare delivery.
              </p>

              <Separator className="bg-brand-secondary/15" />

              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-brand-on-surface-variant">
                    <span className="font-semibold text-brand-primary">Main Office:</span>{" "}
                    Plot 497, Cadastral Zone B08, Jahi District, Abuja, Nigeria.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-brand-on-surface-variant">
                    <span className="font-semibold text-brand-primary">Branch:</span>{" "}
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
