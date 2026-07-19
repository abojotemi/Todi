"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

const subjectOptions = [
  { value: "", label: "Select an area of enquiry..." },
  { value: "medical_consultancy", label: "Medical Consultancy" },
  { value: "equipment_supply", label: "Equipment Supply" },
  { value: "general_supply", label: "General Supply" },
  { value: "other", label: "General Inquiry" },
];

const inputClass =
  "w-full bg-brand-surface-container-lowest border border-brand-outline/30 rounded-lg px-4 py-3 text-base text-brand-on-surface placeholder:text-brand-outline/60 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none";

const labelClass =
  "block text-xs font-semibold tracking-widest uppercase text-brand-on-surface mb-1.5";

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
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setFormState("success");
      form.reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message."
      );
      setFormState("error");
    }
  }

  return (
    <div className="bg-brand-surface-container-lowest rounded-2xl shadow-lg shadow-brand-primary/5 border border-brand-secondary/10 overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-brand-teal to-brand-primary" aria-hidden />
      {formState === "success" ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4 text-center px-8">
          <div className="w-16 h-16 rounded-full bg-brand-teal-light flex items-center justify-center mb-2">
            <CheckCircle size={32} className="text-brand-teal" aria-hidden />
          </div>
          <h2 className="font-serif text-2xl font-bold text-brand-primary">
            Message Sent
          </h2>
          <p className="text-base text-brand-on-surface-variant max-w-sm">
            Thank you for reaching out. We&apos;ll be in touch within one
            business day.
          </p>
          <button
            onClick={() => setFormState("idle")}
            className="mt-4 text-xs font-semibold tracking-widest uppercase text-brand-teal hover:text-brand-primary transition-colors underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="p-8 sm:p-6 space-y-6">
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="Jane"
                className={inputClass}
                disabled={formState === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Doe"
                className={inputClass}
                disabled={formState === "submitting"}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Business Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane.doe@company.com"
              className={inputClass}
              disabled={formState === "submitting"}
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className={labelClass}>
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className={`${inputClass} appearance-none`}
              disabled={formState === "submitting"}
            >
              {subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we assist you?"
              className={`${inputClass} resize-none`}
              disabled={formState === "submitting"}
            />
          </div>

          {/* Error feedback */}
          {formState === "error" && errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-3 bg-brand-error-container text-brand-on-error-container rounded p-4 text-sm"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="bg-brand-primary text-brand-on-primary text-sm font-semibold hover:bg-brand-primary-container rounded-full px-8 py-3 h-auto inline-flex items-center gap-2 disabled:opacity-60 shadow-lg shadow-brand-primary/20 transition-all"
          >
            {formState === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} aria-hidden />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}