import { Stethoscope, Syringe, Package } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Consultancy",
    description:
      "Expert guidance on healthcare facility planning, workflow optimisation, and regulatory compliance to elevate institutional standards.",
    accent: "from-brand-primary/10 to-brand-teal-light",
    iconColor: "text-brand-primary",
  },
  {
    icon: Syringe,
    title: "Equipment Supply",
    description:
      "Procurement and installation of cutting-edge diagnostic and therapeutic medical devices from globally recognised manufacturers.",
    accent: "from-brand-teal-light to-brand-teal/10",
    iconColor: "text-brand-teal",
  },
  {
    icon: Package,
    title: "General Supply",
    description:
      "Reliable sourcing of essential clinical consumables and operational materials to maintain uninterrupted healthcare delivery.",
    accent: "from-brand-primary-fixed/40 to-brand-surface-container",
    iconColor: "text-brand-primary-container",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-brand-surface py-20 sm:py-14 md:py-28 border-t border-brand-secondary/10 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-teal to-brand-primary-container"
      />

      <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal mb-3">
                What We Do
              </p>
              <h2
                id="services-heading"
                className="font-serif text-4xl sm:text-3xl font-bold text-brand-primary"
              >
                Our Core Competencies
              </h2>
            </div>
            <p className="text-base leading-7 text-brand-on-surface-variant max-w-md sm:text-right">
              Comprehensive solutions tailored for high-end healthcare
              institutions, ensuring operational excellence and superior patient
              care capabilities.
            </p>
          </div>
        </FadeIn>

        {/* Cards — staggered */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" role="list">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 120} direction="up">
              <li className="group bg-brand-surface-container-lowest border border-brand-secondary/15 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col h-full">
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.accent}`} aria-hidden />
                <div className="p-8 flex flex-col flex-grow">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 ${service.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <service.icon size={26} aria-hidden />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base leading-7 text-brand-on-surface-variant flex-grow">
                    {service.description}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
