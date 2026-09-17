"use client";

import Link from "next/link";
import { useState } from "react";
import { Send } from "@/components/ui/LucideIcons";

type InterestType = "Volunteer" | "Share Professional Skills" | "Refer a School / Community" | "Employee Volunteering" | "Other";

const field = "min-h-12 rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbff_100%)] px-4 text-[15px] font-medium text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10";
const label = "grid gap-2 text-[14px] font-extrabold text-brand-navy";

export function GetInvolvedInterestForm({ submitted = false }: { submitted?: boolean }) {
  const [interest, setInterest] = useState<InterestType>("Volunteer");

  return (
    <form
      name="get-involved"
      method="POST"
      action="/get-involved?submitted=1"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="overflow-hidden rounded-[30px] border border-brand-purple/15 bg-white shadow-[0_24px_70px_rgba(13,27,61,.10)]"
    >
      <input type="hidden" name="form-name" value="get-involved" />
      <p className="hidden" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" /></label></p>
      <div className="h-2 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-teal" />
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div role="status" className="mb-5 rounded-[18px] border border-brand-teal/20 bg-brand-teal-soft px-4 py-3.5 text-[14px] leading-6 text-brand-navy">
            <strong className="block text-brand-teal">Thank you — we received your interest.</strong>
            Our team will review the details and share the most relevant next step.
          </div>
        ) : null}
        <div className="rounded-[22px] border border-brand-purple/10 bg-[radial-gradient(circle_at_95%_5%,rgba(242,61,146,.10),transparent_28%),linear-gradient(135deg,#faf7ff,#ffffff_55%,#f3fffc)] p-5">
          <div>
            <p className="text-[13px] font-black uppercase tracking-[.12em] text-brand-purple">INTEREST FORM</p>
            <h3 className="mt-2 text-2xl font-black tracking-[-.04em] text-brand-navy">Help Us Find the Right Fit</h3>
            <p className="mt-2 text-[14px] leading-6 text-slate-600">Tell us what you can offer, where your interests lie and when you are available. We use these details only to match you with a relevant opportunity.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className={`${label} sm:col-span-2`}>
            How would you like to get involved? *
            <select name="interest" value={interest} onChange={(e) => setInterest(e.target.value as InterestType)} className={field}>
              <option>Volunteer</option>
              <option>Share Professional Skills</option>
              <option>Refer a School / Community</option>
              <option>Employee Volunteering</option>
              <option>Other</option>
            </select>
          </label>

          <label className={label}>Your Name *<input required minLength={2} maxLength={80} name="name" autoComplete="name" className={field} /></label>
          <label className={label}>Email *<input required type="email" maxLength={160} name="email" autoComplete="email" className={field} /></label>
          <label className={label}>Phone / WhatsApp *<input required type="tel" maxLength={20} name="phone" autoComplete="tel" className={field} /></label>
          <label className={label}>City *<input required maxLength={100} name="city" autoComplete="address-level2" className={field} /></label>
          <label className={label}>Profession / Organisation<input maxLength={120} name="profession" autoComplete="organization" className={field} /></label>
          <label className={label}>Availability<input maxLength={120} name="availability" placeholder="Weekends, evenings, monthly…" className={field} /></label>

          <label className={label}>Area of Interest<select name="areaOfInterest" defaultValue="stem" className={field}><option value="stem">STEM / Robotics</option><option value="digital">AI & Digital Skills</option><option value="health">Preventive Health</option><option value="outreach">Outreach / Events</option><option value="professional">Professional Support</option><option value="not-sure">Not Sure Yet</option></select></label>
          <label className={label}>How Can You Contribute?<select name="contributionType" defaultValue="time" className={field}><option value="time">Time / Volunteering</option><option value="skills">Professional Skills</option><option value="school-connection">School / Community Connection</option><option value="company-team">Company Team</option><option value="other">Other</option></select></label>
          <label className={label}>Mode Preference<select name="mode" defaultValue="either" className={field}><option value="either">Online or On-ground</option><option value="online">Online</option><option value="on-ground">On-ground / Delhi NCR</option></select></label>
          <label className={label}>Relevant Experience / Qualification<input maxLength={220} name="experience" placeholder="Optional" className={field} /></label>

          {interest === "Refer a School / Community" && (
            <>
              <label className={label}>School / Community *<input required maxLength={140} name="school" className={field} /></label>
              <label className={label}>School Location *<input required maxLength={140} name="schoolLocation" className={field} /></label>
              <label className={label}>Approx. Learners<input maxLength={30} name="learners" placeholder="If known" className={field} /></label>
              <label className={label}>Program Interest<select name="program" defaultValue="Not sure yet" className={field}><option>STEM Education</option><option>Youth AI & Digital Skills</option><option>Preventive Health & Awareness</option><option>Not sure yet</option></select></label>
            </>
          )}

          {interest === "Employee Volunteering" && (
            <>
              <label className={label}>Company *<input required maxLength={140} name="company" className={field} /></label>
              <label className={label}>Approx. Team Size<input maxLength={30} name="teamSize" className={field} /></label>
              <label className={`${label} sm:col-span-2`}>Team Skills / Volunteering Interest<input maxLength={300} name="teamSkills" placeholder="Mentoring, technology, project reviews…" className={field} /></label>
            </>
          )}

          <label className={`${label} sm:col-span-2`}>
            Relevant Details (Optional)
            <textarea rows={3} maxLength={1000} name="message" placeholder="Share only what will help us understand your interest, availability, experience or preferred contribution." className="min-h-[100px] resize-y rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfbff_100%)] p-4 text-[15px] font-medium leading-6 text-brand-navy outline-none placeholder:text-slate-400 focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10" />
          </label>
        </div>

        <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-[linear-gradient(135deg,#f2fffc,#faf7ff)] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-5 text-brand-navy/75">We review each response against current needs, suitability and any required safeguards, then share the most relevant next step.</p>
          <button type="submit" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink px-5 py-2.5 text-[14px] font-extrabold text-white shadow-[0_14px_34px_rgba(109,60,201,.20)] transition hover:-translate-y-0.5"><Send size={16} />Share My Interest</button>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">By submitting this form, you agree that we may use these details to respond to your interest. See our <Link href="/privacy" className="font-bold text-brand-purple hover:underline">Privacy Policy</Link>.</p>
      </div>
    </form>
  );
}
