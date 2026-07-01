"use client";

import { useState } from "react";
import { HREF } from "@/lib/data";
import { ArrowRight, Close } from "./icons";

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative z-50 bg-brand text-white">
      <div className="mx-auto flex min-h-11 max-w-304 items-center justify-center gap-x-3 px-10 py-2 text-center text-[13px] sm:text-sm">
        <span className="hidden rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold sm:inline-block">
          New
        </span>
        <p className="font-medium">
          <span className="font-semibold sm:hidden">New&nbsp;&nbsp;</span>
          Product fidelity, down to every detail
        </p>
        <a
          href={HREF}
          className="group hidden items-center gap-1 font-semibold underline-offset-4 hover:underline sm:inline-flex"
        >
          Try Product Fixer
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
      >
        <Close className="h-4 w-4" />
      </button>
    </div>
  );
}
