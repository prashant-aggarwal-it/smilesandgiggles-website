import type { HomePageContent } from "@/content/home";
import { Heart } from "@/components/ui/LucideIcons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function DonationCta({ content }: { content: HomePageContent["donation"] }) {
  return (
    <section id="donate" className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(110deg,#fff1e0_0%,#fff8fc_44%,#e9fffb_100%)] py-10">
      <span aria-hidden="true" className="absolute left-0 top-0 h-full w-3 bg-brand-orange" />
      <span aria-hidden="true" className="absolute right-0 top-0 h-1/2 w-3 bg-brand-pink" />
      <span aria-hidden="true" className="absolute bottom-0 right-0 h-1/2 w-3 bg-brand-teal" />
      <Container>
        <div data-reveal className="relative grid items-center gap-5 overflow-hidden rounded-[24px] border border-white bg-white/90 p-6 shadow-[0_18px_50px_rgba(29,36,70,.08)] backdrop-blur sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] lg:p-8">
          <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-teal" />
          <span className="grid size-14 place-items-center rounded-2xl bg-brand-orange text-white shadow-[0_14px_28px_rgba(255,138,0,.26)]"><Heart size={23} strokeWidth={2} /></span>
          <div><h2 className="text-lg font-extrabold tracking-[-.03em] text-ink">{content.title}</h2><p className="mt-2 max-w-3xl text-xs leading-5 text-muted sm:text-sm sm:leading-6">{content.body}</p></div>
          <ButtonLink href="/donate" variant="outline" showArrow className="sm:col-span-2 lg:col-span-1">Donate to Support Our Work</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
