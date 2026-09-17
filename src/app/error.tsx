"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="grid min-h-[72vh] place-items-center bg-[linear-gradient(135deg,#fff8fc,#ffffff_48%,#effffc)] px-4 pb-16 pt-32">
      <Container className="text-center">
        <p className="eyebrow">Something Went Wrong</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-[-.045em] text-ink sm:text-5xl">
          This page could not load correctly.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
          Please try again. If the problem continues, you can return to the homepage or contact the Foundation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="inline-flex min-h-12 items-center rounded-full bg-brand-purple px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5">
            Try Again
          </button>
          <Link href="/" className="inline-flex min-h-12 items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:border-brand-purple/40">
            Return Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
