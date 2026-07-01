"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { DIFFERENTIATORS } from "@/lib/data";

export default function ScaleAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="For teams that ship at scale"
          title="Built for visual production at scale"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Accordion */}
          <div className="order-2 flex flex-col lg:order-1">
            {DIFFERENTIATORS.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  key={item.index}
                  className={`border-l-2 pl-5 transition-colors sm:pl-6 ${
                    isActive ? "border-brand" : "border-black/10"
                  } ${i > 0 ? "pt-7" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex w-full items-start gap-3 text-left"
                    aria-expanded={isActive}
                  >
                    <span
                      className={`text-lg font-medium tabular-nums ${
                        isActive ? "text-brand" : "text-muted-2"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span
                      className={`text-lg font-medium leading-snug sm:text-xl ${
                        isActive ? "text-ink" : "text-muted"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>

                  {/* Image inline on mobile */}
                  {isActive && (
                    <div className="relative mt-5 aspect-square overflow-hidden rounded-2xl lg:hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <ul className="space-y-3 overflow-hidden">
                      {item.points.map((pt) => (
                        <li key={pt.lead} className="flex gap-2.5 text-[15px] leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-2" />
                          <span className="text-ink-soft">
                            <span className="font-semibold text-ink">{pt.lead}</span>
                            {pt.rest}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image (desktop) */}
          <div className="relative order-1 hidden aspect-square overflow-hidden rounded-3xl lg:order-2 lg:block">
            <Image
              key={DIFFERENTIATORS[active].image}
              src={DIFFERENTIATORS[active].image}
              alt={DIFFERENTIATORS[active].title}
              fill
              sizes="(min-width:1024px) 48vw, 100vw"
              className="animate-[fadeIn_0.4s_ease] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
