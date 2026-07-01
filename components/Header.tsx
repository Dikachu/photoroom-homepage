"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  NAV_MENUS,
  HREF,
  type NavMenu,
  type MenuColumn,
  type MenuEntry,
} from "@/lib/data";
import MenuIcon from "./MenuIcon";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Close,
  ArrowRight,
  Apple,
  GooglePlay,
  Facebook,
  Instagram,
  TikTok,
  XMark,
  YouTube,
} from "./icons";

/* ----------------------------- shared bits ---------------------------- */

function NewBadge({ children }: { children: string }) {
  return (
    <span className="ml-1.5 inline-block rounded-md bg-brand/10 px-1.5 py-px text-[10px] font-semibold leading-tight text-brand">
      {children}
    </span>
  );
}

function CtaPill({ title, desc }: { title: string; desc?: string }) {
  return (
    <a
      href={HREF}
      className="group mt-4 flex items-center justify-between gap-3 rounded-2xl bg-brand/[0.07] p-3.5 transition-colors hover:bg-brand/12"
    >
      <span>
        <span className="block text-[15px] font-medium text-ink">{title}</span>
        {desc && (
          <span className="mt-0.5 block text-[13px] text-muted">{desc}</span>
        )}
      </span>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-ink shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

/** Chevron that fades + slides in from the left on row hover. */
function HoverArrow() {
  return (
    <ChevronRight className="h-4 w-4 shrink-0 -translate-x-1.5 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
  );
}

function IconItem({ item }: { item: MenuEntry }) {
  return (
    <a
      href={HREF}
      className="group -mx-2.5 flex items-center gap-3.5 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-cream"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream text-ink transition-colors group-hover:bg-cream-200">
        {item.icon && <MenuIcon name={item.icon} className="h-5.5 w-5.5" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-medium text-ink">
          {item.title}
          {item.badge && <NewBadge>{item.badge}</NewBadge>}
        </span>
        {item.desc && (
          <span className="block text-[13px] text-muted">{item.desc}</span>
        )}
      </span>
      <HoverArrow />
    </a>
  );
}

function InfoItem({ item }: { item: MenuEntry }) {
  return (
    <a
      href={HREF}
      className="group -mx-2.5 flex items-center gap-2 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-cream"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-medium text-ink">{item.title}</span>
        {item.desc && (
          <span className="mt-0.5 block text-[13px] text-muted">{item.desc}</span>
        )}
      </span>
      <HoverArrow />
    </a>
  );
}

function TextLink({ item }: { item: MenuEntry }) {
  return (
    <a
      href={HREF}
      className="block py-2.5 text-[17px] text-ink-soft transition-colors hover:text-ink"
    >
      {item.title}
    </a>
  );
}

function FeaturedReport({ f }: { f: NonNullable<MenuColumn["featured"]> }) {
  return (
    <div>
      <div className="relative aspect-16/11 overflow-hidden rounded-2xl bg-cream-200">
        <Image
          src={f.image}
          alt=""
          fill
          sizes="380px"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-emerald-600 shadow-sm">
          ▲ {f.badges[0]}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-ink shadow-sm">
          ◷ {f.badges[1]}
        </span>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-2">
        {f.kicker}
      </p>
      <p className="mt-1.5 text-lg font-medium leading-snug text-ink">
        {f.title}
      </p>
      <CtaPill title={f.cta} />
    </div>
  );
}

function SalesCard({ s }: { s: NonNullable<MenuColumn["sales"]> }) {
  return (
    <div>
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-cream-200 text-ink">
        <MenuIcon name={s.icon} className="h-5.5 w-5.5" />
      </span>
      <p className="mt-5 text-xl font-medium text-ink">{s.title}</p>
      <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-muted">
        {s.desc}
      </p>
      <a
        href={HREF}
        className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-ink px-5 text-[15px] font-medium text-white transition-colors hover:bg-black"
      >
        {s.button}
      </a>
    </div>
  );
}

function ColumnBody({ col }: { col: MenuColumn }) {
  if (col.featured) return <FeaturedReport f={col.featured} />;
  if (col.sales) return <SalesCard s={col.sales} />;
  if (col.variant === "links")
    return (
      <div className="-my-1">
        {col.items?.map((it) => (
          <TextLink key={it.title} item={it} />
        ))}
      </div>
    );
  if (col.variant === "info")
    return (
      <div className="space-y-1">
        {col.items?.map((it) => (
          <InfoItem key={it.title} item={it} />
        ))}
        {col.cta && <CtaPill title={col.cta.title} desc={col.cta.desc} />}
      </div>
    );
  return (
    <div className="space-y-1">
      {col.items?.map((it) => (
        <IconItem key={it.title} item={it} />
      ))}
      {col.cta && <CtaPill title={col.cta.title} desc={col.cta.desc} />}
    </div>
  );
}

function MegaPanel({ menu }: { menu: NavMenu }) {
  if (!menu.columns) return null;
  return (
    <div className="grid grid-cols-3 divide-x divide-black/6">
      {menu.columns.map((col) => {
        const tinted = Boolean(col.featured || col.sales);
        return (
          <div
            key={col.label}
            className={`p-6 lg:p-7 ${tinted ? "bg-cream/40" : ""}`}
          >
            {col.label && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-2">
                {col.label}
              </p>
            )}
            <ColumnBody col={col} />
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------ Header -------------------------------- */

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeMenu = NAV_MENUS.find((n) => n.label === active && n.columns);

  return (
    <header className="sticky top-0 z-40 border-b border-black/6 bg-white/90 backdrop-blur-md">
      <div className="relative" onMouseLeave={() => setActive(null)}>
        <div className="mx-auto flex h-17 max-w-304 items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href={HREF}
            aria-label="Photoroom home"
            className="flex shrink-0 items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/svg/inline-2.svg"
              alt="Photoroom"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_MENUS.map((item) => {
              const isActive = active === item.label && item.columns;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() =>
                    setActive(item.columns ? item.label : null)
                  }
                >
                  <a
                    href={HREF}
                    className={`flex items-center gap-1 rounded-xl px-3.5 py-2 text-[17px] font-medium transition-colors ${
                      isActive ? "bg-cream text-ink" : "text-ink hover:bg-cream"
                    }`}
                  >
                    {item.label}
                    {item.columns && (
                      <ChevronDown
                        className={`h-4 w-4 text-muted transition-transform duration-200 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href={HREF}
              className="px-2 text-[16px] font-medium text-ink hover:text-brand"
            >
              Log in
            </a>
            <a
              href={HREF}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-4 text-[15px] font-medium text-ink ring-1 ring-black/12 transition-colors hover:bg-cream"
            >
              Contact sales
            </a>
            <a
              href={HREF}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-ink px-4 text-[15px] font-medium text-white transition-colors hover:bg-black"
            >
              Start creating
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop mega-menu */}
        {activeMenu && (
          <div className="absolute inset-x-0 top-[full - 10px] hidden lg:block">
            {/* pt provides a hoverable bridge so the gap doesn't close the menu */}
            <div className="mx-auto max-w-304 px-5 -pt-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.22)]">
                <MegaPanel menu={activeMenu} />
              </div>
            </div>
          </div>
        )}
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

/* --------------------------- Mobile drawer ---------------------------- */

const APP_BADGES = [
  { Icon: Apple, small: "Download on the", big: "App Store" },
  { Icon: GooglePlay, small: "GET IT ON", big: "Google Play" },
];
const SOCIALS = [Facebook, Instagram, TikTok, XMark, YouTube];

function MobileColumn({ col }: { col: MenuColumn }) {
  return (
    <div className="mb-2">
      {col.label && (
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted-2">
          {col.label}
        </p>
      )}
      {col.featured ? (
        <FeaturedReport f={col.featured} />
      ) : col.sales ? (
        <SalesCard s={col.sales} />
      ) : col.variant === "links" ? (
        col.items?.map((it) => <TextLink key={it.title} item={it} />)
      ) : col.variant === "info" ? (
        <>
          {col.items?.map((it) => (
            <InfoItem key={it.title} item={it} />
          ))}
          {col.cta && <CtaPill title={col.cta.title} desc={col.cta.desc} />}
        </>
      ) : (
        <>
          {col.items?.map((it) => (
            <IconItem key={it.title} item={it} />
          ))}
          {col.cta && <CtaPill title={col.cta.title} desc={col.cta.desc} />}
        </>
      )}
    </div>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Render through a portal to <body> so the drawer escapes the header's
  // backdrop-filter, which would otherwise trap its `position: fixed`.
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-60 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute inset-y-0 right-0 flex w-full max-w-115 flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-17 shrink-0 items-center justify-between border-b border-black/6 px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svg/inline-2.svg" alt="Photoroom" className="h-7 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-cream"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          <nav className="px-4 py-1">
            {NAV_MENUS.map((item) =>
              item.columns ? (
                <div key={item.label} className="border-b border-black/6">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection(
                        openSection === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-medium text-ink"
                    aria-expanded={openSection === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 text-muted transition-transform duration-200 ${
                        openSection === item.label ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </button>
                  {openSection === item.label && (
                    <div className="pb-4">
                      {item.columns.map((col) => (
                        <MobileColumn key={col.label} col={col} />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={HREF}
                  className="block border-b border-black/6 py-4 text-[17px] font-medium text-ink"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="space-y-2.5 px-4 py-6">
            <a
              href={HREF}
              className="flex h-11 items-center justify-center rounded-xl bg-cream text-[15px] font-medium text-ink"
            >
              Manage subscription
            </a>
            <a
              href={HREF}
              className="flex h-11 items-center justify-center rounded-xl bg-cream text-[15px] font-medium text-ink"
            >
              Contact sales
            </a>
          </div>

          <div className="flex flex-col items-center gap-2.5 px-4 pb-6">
            {APP_BADGES.map(({ Icon, small, big }) => (
              <a
                key={big}
                href={HREF}
                className="flex w-50 items-center justify-center gap-2.5 rounded-xl bg-ink px-4 py-2.5 text-white"
              >
                <Icon className="h-7 w-7" />
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-wide">
                    {small}
                  </span>
                  <span className="block text-[17px] font-semibold">{big}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-7 px-4 pb-10">
            {SOCIALS.map((Icon, i) => (
              <a key={i} href={HREF} aria-label="social" className="text-ink">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
