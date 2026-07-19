"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type FormState = "idle" | "submitting" | "success" | "error";

const subjectOptions = [
  { value: "", label: "Select an area of enquiry…" },
  { value: "medical_consultancy", label: "Medical Consultancy" },
  { value: "equipment_supply", label: "Equipment Supply" },
  { value: "general_supply", label: "General Supply" },
  { value: "other", label: "General Inquiry" },
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName:  (form.elements.namedItem("lastName")  as HTMLInputElement).value,
      email:     (form.elements.namedItem("email")     as HTMLInputElement).value,
      subject:   (form.elements.namedItem("subject")   as HTMLSelectElement).value,
      message:   (form.elements.namedItem("message")   as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");

      setFormState("success");
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <Card className="rounded-2xl border-brand-secondary/10 shadow-sm">
        <CardContent className="flex flex-col items-center justify-center py-20 gap-4 text-center">
          <div className="w-14 h-14 rounded-full bg-brand-teal-light flex items-center justify-center">
            <CheckCircle size={28} className="text-brand-teal" aria-hidden />
          </div>
          <CardTitle className="font-serif text-2xl font-bold text-brand-primary">
            Message Sent
          </CardTitle>
          <CardDescription className="text-brand-on-surface-variant max-w-xs">
            Thank you for reaching out. We&apos;ll be in touch within one business day.
          </CardDescription>
          <button
            onClick={() => setFormState("idle")}
            className="mt-2 text-xs font-semibold tracking-widest uppercase text-brand-teal hover:text-brand-primary transition-colors underline underline-offset-4"
          >
            Send another message
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl border-brand-secondary/10 shadow-sm">
      <CardHeader>
        <CardTitle className="font-serif text-xl font-bold text-brand-primary">
          Send a Message
        </CardTitle>
        <CardDescription className="text-brand-on-surface-variant">
          Fill in the form below and we'll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="firstName" className="text-brand-on-surface text-xs font-semibold tracking-widest uppercase">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="Jane"
                disabled={formState === "submitting"}
                className="bg-brand-surface-container-low border-brand-secondary/20 focus-visible:ring-brand-teal/30 focus-visible:border-brand-teal rounded-xl h-11"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName" className="text-brand-on-surface text-xs font-semibold tracking-widest uppercase">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Doe"
                disabled={formState === "submitting"}
                className="bg-brand-surface-container-low border-brand-secondary/20 focus-visible:ring-brand-teal/30 focus-visible:border-brand-teal rounded-xl h-11"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-brand-on-surface text-xs font-semibold tracking-widest uppercase">
              Business Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane.doe@company.com"
              disabled={formState === "submitting"}
              className="bg-brand-surface-container-low border-brand-secondary/20 focus-visible:ring-brand-teal/30 focus-visible:border-brand-teal rounded-xl h-11"
            />
          </div>

          {/* Subject — native select with shadcn input visual treatment */}
          <div className="space-y-1.5">
            <Label htmlFor="subject" className="text-brand-on-surface text-xs font-semibold tracking-widest uppercase">
              Subject
            </Label>
            <select
              id="subject"
              name="subject"
              required
              disabled={formState === "submitting"}
              className="w-full h-11 rounded-xl border border-brand-secondary/20 bg-brand-surface-container-low px-3 text-sm text-brand-on-surface appearance-none outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30 focus-visible:border-brand-teal transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-brand-on-surface text-xs font-semibold tracking-widest uppercase">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we assist you?"
              disabled={formState === "submitting"}
              className="bg-brand-surface-container-low border-brand-secondary/20 focus-visible:ring-brand-teal/30 focus-visible:border-brand-teal rounded-xl"
            />
          </div>

          {/* Error */}
          {formState === "error" && errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-3 bg-brand-error-container text-brand-on-error-container rounded-xl p-4 text-sm"
            >
              <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary-container rounded-full px-7 py-3 h-auto inline-flex items-center gap-2 disabled:opacity-60 transition-all active:scale-95"
          >
            {formState === "submitting" ? (
              <><Loader2 size={15} className="animate-spin" aria-hidden />Sending…</>
            ) : (
              <><Send size={15} aria-hidden />Send Message</>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
