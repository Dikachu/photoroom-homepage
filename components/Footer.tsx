"use client";

import { useState } from "react";
import { FOOTER_COLUMNS, LEGAL_LINKS, HREF } from "@/lib/data";
import {
  Apple,
  Android,
  Tablet,
  Window,
  Globe,
  Facebook,
  Instagram,
  TikTok,
  XMark,
  YouTube,
  ChevronDown,
} from "./icons";

const APPS = [
  { label: "iPhone app", Icon: Apple },
  { label: "iPad app", Icon: Tablet },
  { label: "Android app", Icon: Android },
  { label: "Web app", Icon: Window },
];

const SOCIALS = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "TikTok", Icon: TikTok },
  { label: "X", Icon: XMark },
  { label: "YouTube", Icon: YouTube },
];

/** Which stacked groups sit in each desktop column. */
const DESKTOP_COLUMNS: string[][] = [
  ["Tools"],
  ["Use cases", "Product photography"],
  ["Industries", "Automation"],
  ["Company", "Plans"],
];

const groupBy = (title: string) => FOOTER_COLUMNS.find((c) => c.title === title);

function Badge({ children }: { children: string }) {
  return (
    <span className="ml-1.5 inline-block rounded-md bg-brand/10 px-1.5 py-px text-[10px] font-semibold leading-tight text-brand">
      {children}
    </span>
  );
}

function LinkGroup({ title }: { title: string }) {
  const col = groupBy(title);
  if (!col) return null;
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-ink">{col.title}</h3>
      <ul className="mt-4 space-y-2.5">
        {col.links.map((link) => (
          <li key={link.label}>
            <a href={HREF} className="text-sm text-muted transition-colors hover:text-ink">
              {link.label}
              {link.badge && <Badge>{link.badge}</Badge>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppButtons({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {APPS.map(({ label, Icon }) => (
        <a
          key={label}
          href={HREF}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
        >
          <Icon className="h-4.5 w-4.5" />
          {label}
        </a>
      ))}
    </div>
  );
}

function LanguageButton() {
  return (
    <button
      type="button"
      className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-cream px-3 text-sm font-medium text-ink"
    >
      <Globe className="h-4 w-4" />
      English
      <ChevronDown className="h-4 w-4 text-muted" />
    </button>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-4">
      {SOCIALS.map(({ label, Icon }) => (
        <a
          key={label}
          href={HREF}
          aria-label={label}
          className="text-ink transition-opacity hover:opacity-70"
        >
          <Icon className="h-4.5 w-4.5" />
        </a>
      ))}
    </div>
  );
}

function LegalLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted ${className}`}>
      {LEGAL_LINKS.map((link) => (
        <li key={link}>
          <a href={HREF} className="transition-colors hover:text-ink">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

/* --------------------------- Mobile accordion ------------------------- */
function MobileGroups() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div>
      {FOOTER_COLUMNS.map((col) => {
        const isOpen = open === col.title;
        return (
          <div key={col.title} className="border-b border-black/6">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : col.title)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium text-ink"
            >
              {col.title}
              <ChevronDown
                className={`h-5 w-5 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {isOpen && (
              <ul className="space-y-3 pb-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={HREF} className="text-sm text-muted hover:text-ink">
                      {link.label}
                      {link.badge && <Badge>{link.badge}</Badge>}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black/6 bg-white">
      <div className="mx-auto max-w-304 px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Desktop: grouped link columns + apps */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-5">
          {DESKTOP_COLUMNS.map((groups, i) => (
            <div key={i} className="space-y-9">
              {groups.map((title) => (
                <LinkGroup key={title} title={title} />
              ))}
            </div>
          ))}
          <div>
            <h3 className="text-[15px] font-semibold text-ink">Explore our apps</h3>
            <AppButtons className="mt-4 flex flex-col gap-2.5" />
          </div>
        </div>

        {/* Mobile: accordion + apps + meta */}
        <div className="lg:hidden">
          <MobileGroups />
          <div className="mt-8">
            <h3 className="text-[15px] font-semibold text-ink">Explore our apps</h3>
            <AppButtons className="mt-4 flex flex-wrap gap-2.5" />
          </div>
          <div className="mt-8">
            <LanguageButton />
          </div>
          <div className="mt-8">
            <Socials />
          </div>
          <div className="mt-8">
            <LegalLinks />
            <p className="mt-4 text-sm text-muted">Copyright © 2026 Photoroom, Inc.</p>
          </div>
        </div>

        {/* Desktop bottom bar */}
        <div className="mt-14 hidden border-t border-black/6 pt-8 lg:block">
          <div className="flex items-center justify-between">
            <Socials />
            <LanguageButton />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted">Copyright © {new Date().getFullYear()} Photoroom, Inc.</p>
            <LegalLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
