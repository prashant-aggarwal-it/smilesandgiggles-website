import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="main-content" className="grid min-h-[72vh] place-items-center bg-[linear-gradient(135deg,#fff8fc,#ffffff_48%,#effffc)] px-4 pb-16 pt-32">
      <Container className="text-center">
        <p className="eyebrow">404 · Page Not Found</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-[-.045em] text-ink sm:text-5xl">
          We could not find the page you were looking for.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
          The link may be outdated or the address may have been entered incorrectly. You can return home or explore our current work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-brand-purple px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5">
            Return Home
          </Link>
          <Link href="/our-work" className="inline-flex min-h-12 items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:border-brand-purple/40">
            Explore Our Work
          </Link>
        </div>
      </Container>
    </main>
  );
}
