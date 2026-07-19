import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – Todi & Partners Ltd",
  description:
    "Get in touch with Todi & Partners. Medical consultancy and equipment supply enquiries welcome.",
};

const contactDetails = [
  {
    Icon: MapPin,
    label: "Abuja Office",
    lines: ["Plot 497, Cadastral Zone B08", "Jahi District, Abuja, Nigeria."],
  },
  {
    Icon: MapPin,
    label: "Branch Office",
    lines: ["Plot 5A Block LVII, Off Sola Ajetomobi Street", "Oba-Ile Housing Estate, Akure, Ondo State."],
  },
  {
    Icon: Phone,
    label: "Phone",
    lines: ["+234-803-571-5616"],
    href: "tel:+2348035715616",
  },
  {
    Icon: Mail,
    label: "Email",
    lines: ["info@todiandpartners.com"],
    href: "mailto:info@todiandpartners.com",
  },
  {
    Icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Fri: 8:00am – 5:00pm", "Sat: 9:00am – 1:00pm"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full">

        {/* Page header */}
        <div className="bg-[#0b1829] dark:bg-[#0d1117]">
          <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4 py-16 md:py-20">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal-dim mb-2">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl sm:text-4xl max-sm:text-3xl font-bold text-white mb-3">
              How Can We Help?
            </h1>
            <p className="text-base text-white/60 max-w-lg leading-7">
              For enquiries regarding our medical consultancy and equipment
              supply services, please reach out. We aim to respond within one
              business day.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-brand-surface-container-low">
          <div className="max-w-[1200px] mx-auto px-16 sm:px-6 max-sm:px-4 py-14 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

              <div className="md:col-span-7">
                <ContactForm />
              </div>

              <aside className="md:col-span-5 space-y-5">
                <Card className="rounded-2xl border-brand-secondary/10 shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl font-bold text-brand-primary">
                      Todi &amp; Partners Ltd
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4" role="list">
                      {contactDetails.map(({ Icon, label, lines, href }, i) => (
                        <li key={label}>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-teal-light flex items-center justify-center shrink-0 mt-0.5">
                              <Icon size={14} className="text-brand-teal" aria-hidden />
                            </div>
                            <div>
                              <p className="text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-0.5">
                                {label}
                              </p>
                              {href ? (
                                <a
                                  href={href}
                                  className="text-sm text-brand-primary hover:text-brand-teal hover:underline transition-colors"
                                >
                                  {lines[0]}
                                </a>
                              ) : (
                                <address className="not-italic text-sm text-brand-on-surface leading-6">
                                  {lines.map((line, j) => (
                                    <span key={j}>{line}{j < lines.length - 1 && <br />}</span>
                                  ))}
                                </address>
                              )}
                            </div>
                          </div>
                          {i < contactDetails.length - 1 && (
                            <Separator className="mt-4 bg-brand-secondary/10" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="w-full h-52 rounded-2xl overflow-hidden border border-brand-secondary/10">
                  <iframe
                    title="Todi & Partners office — Jahi, Abuja"
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
        </div>

      </main>
      <Footer />
    </>
  );
}
