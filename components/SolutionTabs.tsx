"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { SOLUTION_TABS, HREF, type BentoCard } from "@/lib/data";

function Card({ card }: { card: BentoCard }) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-3xl bg-cream p-2.5 ${
        card.wide ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-[18px] bg-cream-200 ${
          card.wide ? "aspect-[2.6/1]" : "aspect-[1.33/1]"
        }`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes={card.wide ? "(min-width:1024px) 64vw, 100vw" : "(min-width:1024px) 32vw, 100vw"}
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-3.5 pb-3 pt-5 sm:px-4">
        <h3 className="text-xl font-medium text-ink">{card.title}</h3>
        <div className="mt-2 flex flex-1 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            {card.body}
          </p>
          <a
            href={HREF}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-white px-4 text-[15px] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:bg-white/70"
          >
            Learn more
          </a>
        </div>
      </div>
    </article>
  );
}

export default function SolutionTabs() {
  const [active, setActive] = useState(SOLUTION_TABS[0].id);
  const tab = SOLUTION_TABS.find((t) => t.id === active) ?? SOLUTION_TABS[0];

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="A complete solution"
          title="The full AI visual solution for e‑commerce"
          subtitle="Whether you're listing your first product or managing millions of SKUs."
        />

        {/* Segmented tab control */}
        <div className="mt-9 flex justify-center">
          <div
            role="tablist"
            aria-label="Solution categories"
            className="inline-flex rounded-md bg-cream p-1"
          >
            {SOLUTION_TABS.map((t) => {
              const isActive = t.id === active;
              return (  
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className={`rounded-md px-6 py-2.5 text-[15px] font-medium transition-all sm:px-8 ${
                    isActive
                      ? "bg-white text-ink shadow-[0_1px_4px_rgba(0,0,0,0.08)] ring-1 ring-black/6"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento grid */}
        <div
          key={tab.id}
          className="mt-8 grid animate-[fadeIn_0.4s_ease] grid-cols-1 gap-4 lg:grid-cols-3"
        >
          {tab.cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
