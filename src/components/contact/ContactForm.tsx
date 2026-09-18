"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Send } from "@/components/ui/LucideIcons";
import { contactContent } from "@/content/contact";

const inputClass = "min-h-12 rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbff_100%)] px-4 text-[16px] font-medium text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10";
const labelClass = "grid gap-2 text-[14px] font-extrabold text-brand-navy";

const nextSteps = [
  ["01", "We review", "We understand the purpose and the right route."],
  ["02", "We connect", "We direct it to the relevant program or partnership discussion."],
  ["03", "We respond", "You receive a clear next step by your preferred contact method."],
] as const;

export function ContactForm({ submitted = false }: { submitted?: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState(submitted);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(form);
      const encoded = new URLSearchParams();
      formData.forEach((value, key) => {
        if (typeof value === "string") encoded.append(key, value);
      });

      const response = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });

      if (!response.ok) throw new Error(`Submission failed (${response.status})`);

      setIsSubmitted(true);
      form.reset();
    } catch {
      setSubmitError("We couldn’t submit your enquiry right now. Please try again or contact us by email/WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/contact?submitted=1"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex h-full flex-col overflow-hidden rounded-[30px] border border-brand-purple/15 bg-white shadow-[0_24px_70px_rgba(13,27,61,.10)]"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" /></label></p>
      <div className="h-2 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-teal" />
      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-9">
        {isSubmitted ? (
          <div role="status" className="mb-5 rounded-[18px] border border-brand-teal/20 bg-brand-teal-soft px-4 py-3.5 text-[14px] leading-6 text-brand-navy">
            <strong className="block text-brand-teal">Thank you — your enquiry has been received.</strong>
            Our team will review it and respond using your preferred contact method.
          </div>
        ) : null}
        {submitError ? (
          <div role="alert" className="mb-5 rounded-[18px] border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] leading-6 text-red-700">
            {submitError}
          </div>
        ) : null}
        <div className="rounded-[22px] border border-brand-purple/10 bg-[radial-gradient(circle_at_92%_10%,rgba(22,185,173,.12),transparent_28%),linear-gradient(135deg,#faf7ff_0%,#fffafd_48%,#f5fffc_100%)] p-4 sm:p-5">
          <p className="text-[13px] font-black uppercase tracking-[.12em] text-brand-teal">ENQUIRY FORM</p>
          <h2 className="mt-2 text-2xl font-black tracking-[-.04em] text-brand-navy sm:text-[28px]">Tell Us How We Can Help</h2>
          <p className="mt-2 text-[14px] leading-6 text-slate-600">Your enquiry will be reviewed by our team and directed to the appropriate programme.</p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>Your Name *<input required minLength={2} maxLength={80} name="name" autoComplete="name" className={inputClass} /></label>
          <label className={labelClass}>Email *<input required type="email" maxLength={160} name="email" autoComplete="email" className={inputClass} /></label>
          <label className={labelClass}>Phone / WhatsApp *<input required type="tel" maxLength={20} name="phone" autoComplete="tel" className={inputClass} /></label>
          <label className={labelClass}>Organisation / School<input maxLength={120} name="organisation" autoComplete="organization" className={inputClass} /></label>
          <label className={labelClass}>City / Geography<input maxLength={100} name="geography" autoComplete="address-level2" placeholder="Delhi, NCR, another city…" className={inputClass} /></label>
          <label className={labelClass}>Preferred Contact<select name="preferredContact" defaultValue="whatsapp" className={inputClass}><option value="whatsapp">WhatsApp</option><option value="phone">Phone</option><option value="email">Email</option></select></label>
          <label className={`${labelClass} sm:col-span-2`}>I’d like to discuss *<select required name="enquiryType" defaultValue="csr-partnership" className={inputClass}>{contactContent.enquiryTypes.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
          <label className={`${labelClass} sm:col-span-2`}>Briefly tell us what you need *<textarea required minLength={10} maxLength={1400} rows={3} name="message" placeholder="For example: school location, intended program, partnership goal, volunteering interest or donation query." className="min-h-[104px] resize-y rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbff_100%)] p-4 text-[16px] font-medium leading-6 text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10" /></label>
        </div>

        <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-[linear-gradient(135deg,#fff4e8,#fff8f1)] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-5 text-brand-navy/80">{contactContent.responseNote}</p>
          <button type="submit" disabled={isSubmitting} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink px-5 py-2.5 text-[14px] font-extrabold text-white shadow-[0_14px_34px_rgba(109,60,201,.20)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"><Send size={16} />{isSubmitting ? "Sending…" : "Send Enquiry"}</button>
        </div>

        <div className="mt-5 rounded-[22px] border border-brand-teal/15 bg-[linear-gradient(135deg,#f4fffd_0%,#ffffff_55%,#faf7ff_100%)] p-4">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[.11em] text-brand-purple">WHAT HAPPENS NEXT</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {nextSteps.map(([number, title, body], index) => {
                const tones = ["bg-brand-purple-soft text-brand-purple", "bg-brand-teal-soft text-brand-teal", "bg-brand-pink-soft text-brand-pink"];
                return (
                  <div key={title} className="rounded-[16px] bg-white p-3 shadow-[0_8px_20px_rgba(13,27,61,.04)]">
                    <span className={`grid size-8 place-items-center rounded-full text-[11px] font-black ${tones[index]}`}>{number}</span>
                    <strong className="mt-2 block text-[13px] text-brand-navy">{title}</strong>
                    <span className="mt-1 block text-[12px] leading-5 text-slate-600">{body}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">By submitting this form, you agree that we may use these details to respond to your enquiry. See our <Link href="/privacy" className="font-bold text-brand-purple hover:underline">Privacy Policy</Link>.</p>
      </div>
    </form>
  );
}
