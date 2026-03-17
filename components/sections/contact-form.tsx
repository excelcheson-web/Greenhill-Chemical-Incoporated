"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "sending" | "success" | "error";

const CHEMICAL_INTERESTS = [
  "Inorganic Chemicals",
  "Solvents",
  "Acids & Bases",
  "Specialty Chemicals",
  "Bulk Orders",
  "Custom Formulation",
  "Other",
] as const;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage("Email service is not configured. Please try again later.");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email us directly.");
    }
  }

  const inputClasses = cn(
    "w-full rounded-md border border-brand-border bg-white px-4 py-2.5",
    "text-sm text-brand-anthracite placeholder:text-brand-anthracite/40",
    "transition-colors focus:border-brand-mint focus:outline-none focus:ring-2 focus:ring-brand-mint/30"
  );

  const labelClasses = "block text-sm font-medium text-brand-anthracite mb-1.5";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate={false}
    >
      {/* Name + Company row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="from_name" className={labelClasses}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Industries"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="from_email" className={labelClasses}>
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="from_email"
          name="from_email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@acme.com"
          className={inputClasses}
        />
      </div>

      {/* Chemical Interest */}
      <div>
        <label htmlFor="chemical_interest" className={labelClasses}>
          Chemical Interest
        </label>
        <select
          id="chemical_interest"
          name="chemical_interest"
          defaultValue=""
          className={cn(inputClasses, "appearance-none")}
        >
          <option value="" disabled>
            Select a category…
          </option>
          {CHEMICAL_INTERESTS.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your chemical requirements, quantities, and timeline…"
          className={cn(inputClasses, "resize-y")}
        />
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          Message sent successfully! We'll get back to you within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-md",
          "bg-brand-anthracite px-6 py-3 text-sm font-semibold text-white",
          "transition-colors hover:bg-brand-anthracite/90",
          "focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60"
        )}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
