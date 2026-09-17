"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, FileText, Heart, MessageCircle, ShieldCheck } from "@/components/ui/LucideIcons";
import { siteConfig } from "@/content/site";

type RazorpayDonationButtonProps = {
  buttonId?: string;
};

export function RazorpayDonationButton({ buttonId }: RazorpayDonationButtonProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form || !buttonId) return;

    form.replaceChildren();

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", buttonId);
    form.appendChild(script);

    return () => {
      form.replaceChildren();
    };
  }, [buttonId]);

  return (
    <div className="overflow-hidden rounded-[30px] border border-white bg-white shadow-[0_30px_90px_rgba(13,27,61,.12)]">
      <div className="h-2 bg-gradient-to-r from-brand-pink via-brand-teal to-brand-orange" />
      <div className="p-6 sm:p-8 lg:p-9">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-pink text-white">
            <Heart size={21} />
          </span>
          <div>
            <p className="eyebrow mb-2 text-brand-pink">MAKE YOUR CONTRIBUTION</p>
            <h2 className="text-2xl font-black tracking-[-.04em] text-brand-navy sm:text-3xl">Complete your contribution securely.</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-600">
              Use the sponsorship amount shown above, choose a smaller contribution, or give another amount through our secure Razorpay checkout. If you need help, WhatsApp or email us below.
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-[22px] border border-brand-teal/15 bg-[linear-gradient(135deg,#effffc_0%,#ffffff_52%,#fff5fb_100%)] p-5 sm:p-6">
          {buttonId ? (
            <form ref={formRef} className="razorpay-payment-button flex min-h-14 items-center justify-center" />
          ) : (
            <div className="rounded-2xl border border-dashed border-brand-orange/45 bg-white/85 p-5 text-center">
              <ExternalLink className="mx-auto text-brand-orange" size={24} />
              <p className="mt-3 text-base font-black text-brand-navy">Online donations are being enabled.</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                In the meantime, contact us at {siteConfig.contact.email} or {siteConfig.contact.phone} and we&apos;ll guide you.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="flex gap-3 rounded-2xl bg-brand-teal-soft p-4">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-teal text-white"><ShieldCheck size={17} /></span>
            <p className="text-sm leading-6 text-slate-600"><strong className="block text-brand-navy">Secure Razorpay checkout</strong>Payment-method handling takes place through Razorpay&apos;s checkout experience.</p>
          </div>
          <div className="flex gap-3 rounded-2xl bg-brand-orange-soft p-4">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-orange text-white"><FileText size={17} /></span>
            <p className="text-sm leading-6 text-slate-600"><strong className="block text-brand-navy">Receipt support</strong>Eligible donations can be supported with the Foundation&apos;s applicable 80G documentation process.</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-sm font-bold text-slate-600">
          <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-teal hover:underline"><MessageCircle size={16} />WhatsApp {siteConfig.contact.whatsapp}</a>
          <a href={siteConfig.contact.emailHref} className="hover:text-brand-purple hover:underline">{siteConfig.contact.email}</a>
        </div>
      </div>
    </div>
  );
}
