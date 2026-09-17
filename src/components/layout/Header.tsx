"use client";

import Link from "next/link";
import { ChevronDown, Heart, Menu, X } from "@/components/ui/LucideIcons";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { aboutNavigation, getInvolvedNavigation, mainNavigation, ourWorkNavigation } from "@/content/navigation";
import type { LinkItem } from "@/types/content";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const dotColors = ["bg-brand-teal", "bg-brand-pink", "bg-brand-orange", "bg-brand-purple", "bg-brand-teal"];
type MenuName = "about" | "work" | "involved";

type DropdownProps = {
  menu: MenuName;
  label: string;
  href: string;
  overviewLabel: string;
  links: LinkItem[];
  routeActive: boolean;
  open: boolean;
  onOpen: () => void;
  onScheduleClose: () => void;
};

function DesktopDropdown({ menu, label, href, overviewLabel, links, routeActive, open, onOpen, onScheduleClose }: DropdownProps) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onScheduleClose} onFocus={onOpen} data-menu={menu}>
      <Link
        href={href}
        aria-expanded={open}
        className={cn("site-nav-link flex items-center gap-1", (routeActive || open) && "site-nav-link--active")}
      >
        <span className="site-nav-label">{label}</span><ChevronDown size={13} className={cn("transition duration-150", open && "rotate-180")} />
      </Link>
      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3 transition duration-150",
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0 pointer-events-none",
        )}
      >
        <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white p-2 shadow-[0_24px_70px_rgba(5,13,38,.24)]">
          <Link href={href} className="block rounded-2xl bg-[linear-gradient(135deg,#fff1f8,#eefdfa)] px-4 py-3 text-xs font-extrabold text-brand-navy hover:text-brand-purple">
            {overviewLabel}
          </Link>
          <div className="mt-1 grid gap-1">
            {links.map((sub, index) => (
              <Link key={sub.href} href={sub.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold text-slate-600 transition hover:bg-slate-50 hover:text-brand-purple">
                <span className={`size-2.5 rounded-full ${dotColors[index % dotColors.length]}`} />{sub.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function nestedLinksFor(label: string) {
  if (label === "About") return aboutNavigation;
  if (label === "Our Work") return ourWorkNavigation;
  if (label === "Get Involved") return getInvolvedNavigation;
  return [];
}

function isItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (menu: MenuName) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(false);
      setActiveMenu(null);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setOpen(false);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-menu]")) setActiveMenu(null);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy text-white transition duration-300", scrolled ? "shadow-[0_12px_34px_rgba(5,13,38,.26)]" : "shadow-[0_6px_22px_rgba(5,13,38,.16)]")}>
      <Container className="flex h-[80px] max-w-[1360px] items-center gap-3 sm:gap-5">
        <BrandLogo variant="header" />

        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-[1.15rem] min-[1360px]:flex">
          {mainNavigation.map((item) => {
            const routeActive = isItemActive(pathname, item.href);
            if (item.label === "About") return <DesktopDropdown key={item.label} menu="about" label={item.label} href={item.href} overviewLabel="About Smiles & Giggles" links={aboutNavigation} routeActive={routeActive} open={activeMenu === "about"} onOpen={() => openMenu("about")} onScheduleClose={scheduleClose} />;
            if (item.label === "Our Work") return <DesktopDropdown key={item.label} menu="work" label={item.label} href={item.href} overviewLabel="Explore All Our Work" links={ourWorkNavigation} routeActive={routeActive} open={activeMenu === "work"} onOpen={() => openMenu("work")} onScheduleClose={scheduleClose} />;
            if (item.label === "Get Involved") return <DesktopDropdown key={item.label} menu="involved" label={item.label} href={item.href} overviewLabel="Explore Ways to Get Involved" links={getInvolvedNavigation} routeActive={routeActive} open={activeMenu === "involved"} onOpen={() => openMenu("involved")} onScheduleClose={scheduleClose} />;
            return <Link key={item.label} href={item.href} aria-current={routeActive ? "page" : undefined} onMouseEnter={() => setActiveMenu(null)} className={cn("site-nav-link", routeActive && "site-nav-link--active")}><span className="site-nav-label">{item.label}</span></Link>;
          })}
        </nav>

        <Link href="/donate" onMouseEnter={() => setActiveMenu(null)} className="site-donate-button hidden min-[1360px]:inline-flex"><Heart size={18} aria-hidden="true" /> Donate</Link>

        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)} className="ml-auto grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white min-[1360px]:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-white text-ink min-[1360px]:hidden">
          <Container className="py-5">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {mainNavigation.map((item) => {
                const nested = nestedLinksFor(item.label);
                const active = isItemActive(pathname, item.href);
                return (
                  <div key={item.label}>
                    <Link href={item.href} onClick={() => setOpen(false)} className={cn("block rounded-xl px-3 py-3 text-sm font-bold transition", active ? "bg-brand-purple-soft text-brand-purple" : "text-slate-700 hover:bg-brand-purple-soft hover:text-brand-purple")}>{item.label}</Link>
                    {nested.length ? <div className="ml-3 grid gap-1 border-l border-slate-200 pb-2 pl-3">{nested.map((sub, index) => <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-purple"><span className={`size-2 rounded-full ${dotColors[index % dotColors.length]}`} />{sub.label}</Link>)}</div> : null}
                  </div>
                );
              })}
            </nav>
            <Link href="/donate" onClick={() => setOpen(false)} className="site-donate-button mt-4 flex w-full justify-center"><Heart size={18} aria-hidden="true" /> Donate</Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
