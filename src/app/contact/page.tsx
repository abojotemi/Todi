import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – Todi & Partners Ltd",
  description:
    "Get in touch with Todi & Partners. Medical consultancy and equipment supply enquiries welcome.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Abuja Office",
    lines: [
      "Plot 497, Cadastral Zone B08",
      "Jahi District",
      "Abuja, Nigeria.",
    ],
  },
  {
    icon: MapPin,
    label: "Branch Office",
    lines: [
      "Plot 5A Block LVII",
      "Off Sola Ajetomobi Street",
      "Oba-Ile Housing Estate",
      "Akure, Ondo State, Nigeria.",
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+234-803-571-5616"],
    href: "tel:+2348035715616",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@todiandpartners.com"],
    href: "mailto:info@todiandpartners.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Fri: 8:00am – 5:00pm", "Sat: 9:00am – 1:00pm"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full">
        {/* Hero band */}
        <div className="relative bg-brand-primary overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-dot-grid opacity-[0.06] pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-brand-teal via-brand-primary-fixed-dim to-brand-teal"
          />
          <div className="relative max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4 py-16 md:py-20">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal-dim mb-3">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl sm:text-4xl max-sm:text-3xl font-bold text-brand-on-primary mb-4">
              How Can We Help?
            </h1>
            <p className="text-lg text-brand-on-primary/70 max-w-xl leading-7">
              For enquiries regarding our medical consultancy and equipment
              supply services, please reach out. We aim to respond within one
              business day.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Contact form */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <aside className="md:col-span-5 space-y-6">
              {/* Info card */}
              <div className="bg-brand-surface-container-lowest rounded-2xl shadow-lg shadow-brand-primary/5 border border-brand-secondary/10 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-brand-primary to-brand-teal" aria-hidden />
                <div className="p-8 sm:p-6">
                  <h3 className="font-serif text-xl font-bold text-brand-primary mb-6">
                    Todi &amp; Partners Ltd
                  </h3>
                  <ul className="space-y-5" role="list">
                    {contactDetails.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-teal-light flex items-center justify-center shrink-0 mt-0.5">
                          <item.icon
                            size={15}
                            className="text-brand-teal"
                            aria-hidden
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm leading-6 text-brand-primary hover:text-brand-teal hover:underline transition-colors"
                            >
                              {item.lines[0]}
                            </a>
                          ) : (
                            <address className="not-italic text-sm leading-6 text-brand-on-surface">
                              {item.lines.map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i < item.lines.length - 1 && <br />}
                                </span>
                              ))}
                            </address>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map embed */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-brand-secondary/10 shadow-md">
                <iframe
                  title="Todi & Partners office location — Jahi, Abuja"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.4!2d7.434!3d9.077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMzcuMiJOIDfCsDI2JzAyLjQiRQ!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
