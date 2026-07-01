"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "@/components/icons";

/**
 * Horizontal gallery rail.
 *  - scrolls on overflow (touch / trackpad),
 *  - prev/next arrows appear ONLY on hover,
 *  - each arrow is hidden while that edge is reached,
 *  - neither arrow shows at all until the content actually overflows.
 */
export default function ScrollRow({
  children,
  ariaLabel,
  className = "",
}: {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const overflowing = scrollWidth - clientWidth > 2;
    setCanPrev(overflowing && scrollLeft > 2);
    setCanNext(overflowing && scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    // Late-loading images change scrollWidth — recheck once they settle.
    const t = window.setTimeout(measure, 400);
    window.addEventListener("resize", measure);

    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="group/rail relative">
      <div
        ref={trackRef}
        role="group"
        aria-label={ariaLabel}
        className={`no-scrollbar flex overflow-x-auto scroll-smooth ${className}`}
      >
        {children}
      </div>

      <RailArrow dir="prev" show={canPrev} onClick={() => scrollByPage(-1)} />
      <RailArrow dir="next" show={canNext} onClick={() => scrollByPage(1)} />
    </div>
  );
}

function RailArrow({
  dir,
  show,
  onClick,
}: {
  dir: "prev" | "next";
  show: boolean;
  onClick: () => void;
}) {
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Scroll left" : "Scroll right"}
      tabIndex={show ? 0 : -1}
      className={`absolute top-[42%] z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-db-bg/85 text-db-text shadow-[0_4px_16px_rgba(0,0,0,0.45)] backdrop-blur transition-all duration-200 hover:bg-db-hover focus-visible:opacity-100 ${
        dir === "prev" ? "left-0 -translate-x-1/3" : "right-0 translate-x-1/3"
      } ${
        show
          ? "opacity-0 group-hover/rail:opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
