"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { RESOURCES, HREF } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "./icons";

export default function Resources() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= maxScroll - 2);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : 320;
    track.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Grow your business"
          title="Resources for e‑commerce growth"
          subtitle="Guides, tips, and tactics for selling with better visuals."
          action={
            <Button href={HREF} variant="dark" className="hidden sm:inline-flex">
              Read more
            </Button>
          }
        />
      </Container>

      <div className="mt-10">
        <Container className="pr-0! sm:pr-6!">
          <div
            ref={trackRef}
            onScroll={update}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pr-5 sm:pr-0"
          >
            {RESOURCES.map((post) => (
              <a
                key={post.title}
                href={HREF}
                data-card
                className="group w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-3rem)/4)]"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-cream">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 max-w-xs text-lg font-medium leading-snug text-ink group-hover:text-brand">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </Container>

        <Container className="mt-8">
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <Button href={HREF} variant="dark" className="sm:hidden">
              Read more
            </Button>
            <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous resources"
              className="grid h-11 w-11 place-items-center rounded-xl bg-cream text-ink transition-all hover:bg-cream-200 disabled:cursor-not-allowed disabled:bg-cream disabled:text-muted-2/50 disabled:hover:bg-cream"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="More resources"
              className="grid h-11 w-11 place-items-center rounded-xl bg-cream text-ink transition-all hover:bg-cream-200 disabled:cursor-not-allowed disabled:bg-cream disabled:text-muted-2/50 disabled:hover:bg-cream"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
