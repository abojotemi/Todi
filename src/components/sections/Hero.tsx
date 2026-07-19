import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-brand-surface-container-lowest"
    >
      {/* Gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-teal-light/60 pointer-events-none"
      />
      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-1/2 h-full bg-dot-grid opacity-[0.04] pointer-events-none"
      />

      <div className="relative max-w-[1200px] mx-auto w-full px-16 sm:px-6 max-sm:px-4 py-20 sm:py-14 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Copy — staggered children */}
        <div className="md:col-span-6 flex flex-col gap-7">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 self-start bg-brand-teal-light text-brand-teal border border-brand-teal/20 rounded-full px-4 py-1.5">
              <ShieldCheck size={14} aria-hidden />
              <span className="text-xs font-semibold tracking-wider uppercase">
                Certified Medical Consultancy
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="font-serif text-5xl sm:text-4xl max-sm:text-[2rem] leading-[1.15] tracking-tight font-bold text-brand-primary text-balance">
              Pioneering Excellence in Medical Consultancy &amp; Equipment Supply
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg leading-7 text-brand-on-surface-variant max-w-lg">
              Delivering precision, authority, and reliability to healthcare
              institutions through top-tier equipment and expert advisory services.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4 pt-2">
              {/* <Link
                href="/#services"
                className="group inline-flex items-center gap-2 bg-brand-primary text-brand-on-primary text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand-primary-container active:scale-95 transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/25"
              >
                Explore Our Services
                <ArrowRight size={16} aria-hidden className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link> */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-brand-primary text-sm font-semibold px-7 py-3.5 rounded-full border-2 border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary/5 active:scale-95 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-brand-secondary/10 mt-2">
              {[
                { label: "CAC Registered" },
                { label: "Government & Private Partnerships" },
                { label: "Nationwide Delivery" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 bg-brand-surface-container border border-brand-secondary/20 text-brand-on-surface-variant text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" aria-hidden />
                  {badge.label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Image — slides in from right */}
        <FadeIn delay={150} direction="right" className="md:col-span-6">
          <div className="relative">
            <div className="relative h-[320px] sm:h-[400px] md:h-[580px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/15">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOq6N-crlHC4yHXAgowLfYvlLabamSc_T46Jcvjwndq294tFxfCpM_WmUfrURJcEugjqgakK7m9uBij79q7u-64bvrGs99s-f9hgun1oZq-dE2k90Jk8mlMdfKAxfwq4TAXcOK_UnKZmD1bOw7j4U68DHo6rXVrOkngXZqbBh6htVYkyPdIwqghl1YODN22PPA6j2z92cz17Eran4HAQWHS9mHBTKCcotPTZlDVjNrptRke9OC4bCm"
                alt="State-of-the-art medical operating room and clinical laboratory"
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-primary/30 to-transparent"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-5 -left-5 max-sm:hidden bg-brand-surface-container-lowest rounded-xl shadow-xl shadow-brand-primary/10 border border-brand-secondary/10 p-4 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                <ShieldCheck size={20} aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-primary leading-none mb-1">
                  ISO Certified
                </p>
                <p className="text-xs text-brand-on-surface-variant">
                  Medical grade standards
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
