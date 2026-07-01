"use client";

import { useRef, useState } from "react";
import { GET_STARTED, HREF, type GetStartedCard } from "@/lib/dashboard";
import { ArrowRight } from "@/components/icons";
import Section from "./Section";
import ScrollRow from "./ScrollRow";

function Card({ card }: { card: GetStartedCard }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    // Missing/undecodable files reject silently — the still frame stays up.
    void v.play().catch(() => undefined);
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <a
      href={HREF}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      className="group/card flex w-66 shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-db-card sm:w-80 lg:w-89"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-db-card-2">
        {!ready && (
          <div className="db-skeleton absolute inset-0" aria-hidden="true" />
        )}

        {/* Single looping clip: shows its first frame when idle, plays on hover. */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={card.title}
          onLoadedData={() => setReady(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={card.video} type="video/webm" />
        </video>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3.5">
        <span className="text-[15px] font-semibold text-db-text">
          {card.title}
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-db-text transition-colors group-hover/card:bg-white/10">
          <ArrowRight className="h-4.5 w-4.5" />
        </span>
      </div>
    </a>
  );
}

export default function GetStarted() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <Section
      title="Get started"
      action={
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-[14px] font-medium text-db-muted transition-colors hover:text-db-text"
        >
          Dismiss
        </button>
      }
    >
      <ScrollRow ariaLabel="Get started" className="snap-x gap-4 pb-1">
        {GET_STARTED.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </ScrollRow>
    </Section>
  );
}
