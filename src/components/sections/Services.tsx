import { Stethoscope, Syringe, Package } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    Icon: Stethoscope,
    title: "Medical Consultancy",
    description:
      "Expert guidance on healthcare facility planning, workflow optimisation, and regulatory compliance to elevate institutional standards.",
  },
  {
    Icon: Syringe,
    title: "Equipment Supply",
    description:
      "Procurement and installation of cutting-edge diagnostic and therapeutic medical devices from globally recognised manufacturers.",
  },
  {
    Icon: Package,
    title: "General Supply",
    description:
      "Reliable sourcing of essential clinical consumables and operational materials to maintain uninterrupted healthcare delivery.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-brand-surface py-20 sm:py-14 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4">

        <FadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal mb-2">
              What We Do
            </p>
            <h2 id="services-heading" className="font-serif text-4xl sm:text-3xl font-bold text-brand-primary">
              Our Core Competencies
            </h2>
            <Separator className="mt-6 bg-brand-secondary/15" />
          </div>
        </FadeIn>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" role="list">
          {services.map(({ Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 100} direction="up">
              <li>
                <Card className="group rounded-2xl border-brand-secondary/15 shadow-none hover:shadow-lg hover:shadow-brand-primary/8 hover:-translate-y-1 transition-all duration-300 h-full bg-brand-surface-container-lowest">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-brand-teal-light flex items-center justify-center text-brand-teal mb-2 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                      <Icon size={22} aria-hidden />
                    </div>
                    <CardTitle className="font-serif text-lg font-bold text-brand-primary">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-brand-on-surface-variant leading-relaxed text-sm">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </li>
            </FadeIn>
          ))}
        </ul>

      </div>
    </section>
  );
}
