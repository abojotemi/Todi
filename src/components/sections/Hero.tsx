import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ScrollLink from "@/components/ScrollLink";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const badges = ["CAC Registered", "Govt & Private Partnerships", "Nationwide Delivery"];

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      /* Fixed dark navy — never flips in dark mode */
      className="relative overflow-hidden bg-[#001e40] dark:bg-[#0d1117]"
    >
      {/* Grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-lines opacity-[0.07]"
      />

      {/* Soft bottom fade into next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#001a38]/50 dark:from-[#0d1117]/60 to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto w-full px-8 sm:px-6 max-sm:px-5 py-28 md:py-40 flex flex-col items-center text-center gap-8">

        <FadeIn delay={0}>
          <Badge
            variant="outline"
            className="gap-1.5 border-white/20 text-white/80 bg-white/10 px-3 py-1.5 rounded-full h-auto text-xs font-semibold tracking-wide"
          >
            <ShieldCheck size={12} aria-hidden />
            Certified Medical Consultancy
          </Badge>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="font-serif text-5xl sm:text-4xl max-sm:text-3xl font-bold text-white leading-[1.15] text-balance">
            Medical Consultancy &amp; Equipment Supply
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="text-lg sm:text-base text-white/70 leading-relaxed max-w-lg">
            Precision, authority, and reliability for healthcare institutions —
            from expert advisory to top-tier medical equipment, delivered across Nigeria.
          </p>
        </FadeIn>

        <FadeIn delay={240}>
          <div className="flex flex-wrap justify-center gap-3">
            <ScrollLink
              targetId="services"
              className="inline-flex items-center gap-2 bg-brand-teal text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand-teal-dim active:scale-95 transition-all duration-200"
            >
              Our Services
              <ArrowRight size={15} aria-hidden />
            </ScrollLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/8 active:scale-95 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={320}>
          <Separator className="bg-white/10 w-32 mx-auto" />
          <div className="flex flex-wrap justify-center gap-2 pt-5">
            {badges.map((label) => (
              <Badge
                key={label}
                variant="outline"
                className="border-white/15 text-white/55 bg-transparent h-auto py-1 px-3 text-xs font-medium rounded-full"
              >
                {label}
              </Badge>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
