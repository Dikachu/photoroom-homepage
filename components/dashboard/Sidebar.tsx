"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";
import {
  ACCOUNT,
  ACCOUNT_MENU,
  NAV_MAIN,
  NAV_CONTENT,
  HREF,
  type NavItem,
} from "@/lib/dashboard";
import { Bolt } from "./DashIcons";
import { ChevronDown, Plus } from "@/components/icons";

/* Small glyphs used only inside the account dropdown. */
function G({ children, ...p }: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  );
}

const MENU_GLYPH: Record<string, React.ReactNode> = {
  "Manage Space": (
    <G>
      <circle cx="9" cy="9" r="2.6" />
      <path d="M3.8 18a5.2 5.2 0 0 1 10.4 0" />
      <path d="M15.5 7.2a2.6 2.6 0 0 1 0 5" />
      <path d="M16.5 18a5.2 5.2 0 0 0-2-4.1" />
    </G>
  ),
  "Enterprise integrations": (
    <G>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
      <path d="M7.5 11v3.5A1.5 1.5 0 0 0 9 16h4" />
    </G>
  ),
  "Log in to mobile app": (
    <G>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </G>
  ),
  Profile: (
    <G>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
    </G>
  ),
  "Sign out": (
    <G>
      <path d="M14 4.5H6.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5H14" />
      <path d="M18 12H10M15.5 8.5 19 12l-3.5 3.5" />
    </G>
  ),
};

function Avatar({ size = "h-9 w-9" }: { size?: string }) {
  return (
    <span
      className={`grid ${size} shrink-0 place-items-center rounded-full bg-db-card-2 text-[15px] font-semibold text-db-text ring-1 ring-white/10`}
    >
      {ACCOUNT.initial}
    </span>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <a
      href={HREF}
      aria-current={item.active ? "page" : undefined}
      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors ${
        item.active
          ? "bg-white/8 text-db-text"
          : "text-db-muted hover:bg-white/5 hover:text-db-text"
      }`}
    >
      <Icon className="h-5.5 w-5.5 shrink-0" />
      <span className="min-w-0 flex-1 truncate">{item.label}</span>
      {item.badge && (
        <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-db-text">
          {item.badge}
        </span>
      )}
    </a>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  // Close the account dropdown on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!accountRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-white/6 bg-db-bg xl:w-64">
      {/* Account */}
      <div ref={accountRef} className="relative p-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          className={`flex w-full items-center gap-2.5 rounded-xl px-2 py-2 transition-colors ${
            open ? "bg-white/6" : "hover:bg-white/5"
          }`}
        >
          <Avatar />
          <span className="min-w-0 flex-1 truncate text-left text-[15px] font-semibold text-db-text">
            {ACCOUNT.name}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-db-muted transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute left-3 top-full z-50 -mt-1 w-75 max-w-[calc(100vw-1.5rem)] rounded-2xl border border-white/10 bg-db-surface p-2 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-3 rounded-xl px-2.5 py-2.5">
              <Avatar size="h-10 w-10" />
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-semibold text-db-text">
                  {ACCOUNT.spaceName}
                </span>
                <span className="block text-[13px] text-db-muted">
                  {ACCOUNT.scope}
                </span>
              </span>
            </div>

            <a
              href={HREF}
              role="menuitem"
              className="mt-1 flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-[14px] font-medium text-db-text transition-colors hover:bg-white/6"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/20 text-brand-light">
                <Plus className="h-5 w-5" />
              </span>
              Create a Space
            </a>

            {ACCOUNT_MENU.map((group, gi) => (
              <div
                key={gi}
                className="mt-1 border-t border-white/7 pt-1"
              >
                {group.map((row) => (
                  <a
                    key={row.label}
                    href={HREF}
                    role="menuitem"
                    className="flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-[14px] text-db-text transition-colors hover:bg-white/6"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center text-db-muted">
                      {MENU_GLYPH[row.label]}
                    </span>
                    {row.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="no-scrollbar flex-1 space-y-0.5 overflow-y-auto px-3 pb-2">
        {NAV_MAIN.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}

        <p className="px-3 pt-5 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-db-faint">
          Content
        </p>

        {NAV_CONTENT.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </nav>

      {/* Upgrade */}
      <div className="p-3">
        <a
          href={HREF}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#6a4bff_0%,#9a5cf5_55%,#c065ec_100%)] text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(120,70,240,0.45)] transition-[filter] duration-200 hover:brightness-[1.06]"
        >
          <Bolt className="h-4 w-4" />
          Upgrade Space to Pro
        </a>
      </div>
    </aside>
  );
}
