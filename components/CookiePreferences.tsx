"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function CookiePreferences() {
  const [visible, setVisible] = useState(true);

  const pathname = usePathname().split("/")[1];

  // Hide the cookie preferences component on the /dashboard page
  if (!visible || pathname === "dashboard") return null;

  return (
    <section
      aria-labelledby="cookie-preferences-title"
      className="fixed right-4 bottom-4 z-50 w-[calc(100%-2rem)] max-w-93 sm:right-6 sm:bottom-6"
    >
      <div className="w-full rounded-[18px] bg-white p-4 shadow-[0_14px_34px_rgba(0,0,0,0.18)] ring-1 ring-black/8 sm:p-5">
        <h2
          id="cookie-preferences-title"
          className="text-[22px] font-bold leading-tight text-black"
        >
          Cookie preferences
        </h2>
        <p className="mt-3 text-[14px] font-medium leading-[1.45] text-[#41434a]">
          At Photoroom we use cookies to keep the website functioning properly,
          to measure visitor activity, to integrate third-party content, and to
          evaluate our advertising strategies. You can change your preferences
          at any time in the cookies policy.
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="mt-0.5 block w-fit underline decoration-1 underline-offset-2"
          >
            View our partners
          </a>
        </p>
        <div className="mt-5 grid grid-cols-1 gap-2 min-[430px]:grid-cols-3">
          <button
            type="button"
            onClick={() => undefined}
            className="flex h-11 items-center justify-center rounded-xl bg-[#f6f2fd] px-2 text-[13px] font-semibold whitespace-nowrap text-black transition-colors hover:bg-[#efe8fb]"
          >
            Manage cookies
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex h-11 items-center justify-center rounded-xl bg-[#f6f2fd] px-2 text-[13px] font-semibold whitespace-nowrap text-black transition-colors hover:bg-[#efe8fb]"
          >
            Decline all
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex h-11 items-center justify-center rounded-xl bg-black px-2 text-[13px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-ink"
          >
            Accept all
          </button>
        </div>
      </div>
    </section>
  );
}
