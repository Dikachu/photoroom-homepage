"use client";

import { useState } from "react";
import { EMPOWER, HREF } from "@/lib/dashboard";
import { Close } from "@/components/icons";

/** Dismissible "Empower your team" upsell banner. */
export default function EmpowerBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <section
      aria-label={EMPOWER.title}
      className="relative flex gap-4 overflow-hidden rounded-xl bg-[linear-gradient(90deg,#36280e_0%,#36280e_55%,#36280e_100%)] p-4 sm:items-center sm:gap-6 sm:p-6"
    >
      <div className="min-w-20 flex-1">
        <h2 className="text-[18px] font-semibold leading-tight text-white sm:text-[22px]">
          {EMPOWER.title}
        </h2>
        <p className="mt-1.5 max-w-lg text-[14px] text-white/70">
          {EMPOWER.body}
        </p>
      </div>

      <div className="flex items-center gap-4 pr-4">
        <div className="w-full max-w-30 shrink min-[800px]:max-w-50">
          <img
            src={EMPOWER.team}
            alt={EMPOWER.alt}
            className="h-auto w-full object-cover"
          />
        </div>
        <a
          href={HREF}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-white px-4 text-[15px] font-semibold text-ink transition-colors hover:bg-white/90"
        >
          {EMPOWER.cta}
        </a>
      </div>

      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        <Close className="h-4.5 w-4.5" />
      </button>
    </section>
  );
}
