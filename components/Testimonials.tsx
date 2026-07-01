"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { FEATURED_TESTIMONIALS, HREF } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "./icons";

function ArrowButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = dir === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className={`grid h-11 w-11 place-items-center rounded-xl transition-colors ${
        dir === "next"
          ? "bg-ink text-white hover:bg-black"
          : "bg-white text-ink ring-1 ring-black/10 hover:bg-cream"
      }`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = FEATURED_TESTIMONIALS.length;
  const item = FEATURED_TESTIMONIALS[index];

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Testimonials"
          title="Trusted by the brands selling at first sight"
          action={
            <Button href={HREF} variant="dark" className="hidden sm:inline-flex">
              See all stories
            </Button>
          }
        />

        {/* Featured testimonial */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-cream p-3 sm:p-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-auto">
              <Image
                key={item.cover}
                src={item.cover}
                alt={item.brand}
                fill
                sizes="(min-width:1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col px-3 py-4 sm:px-6 sm:py-6">
              <Image
                key={item.logo}
                src={item.logo}
                alt={item.brand}
                width={170}
                height={100}
                className="h-20 w-auto object-contain"
              />
              <h3 className="heading-tight mt-6 text-[28px] font-normal text-ink sm:text-[34px]">
                {item.stat}
              </h3>
              <blockquote className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
                “{item.quote}”
              </blockquote>
              <div className="mt-5">
                <p className="font-semibold text-ink">{item.author}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                <Button href={HREF} variant="white">
                  Read the story
                </Button>
                <div className="flex gap-2.5">
                  <ArrowButton dir="prev" onClick={() => go(-1)} />
                  <ArrowButton dir="next" onClick={() => go(1)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Static brand row — the active testimonial's logo is highlighted */}
        <div className="mt-10 grid grid-cols-3 border-t border-black/[0.07] sm:grid-cols-4">
          {FEATURED_TESTIMONIALS.map((t, i) => (
            <button
              key={t.brand}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${t.brand} story`}
              aria-pressed={i === index}
              className="flex h-28 items-center justify-center px-6 transition-colors sm:h-36 sm:not-first:border-l"
            >
              <Image
                src={t.logo}
                alt={t.brand}
                width={220}
                height={150}
                className={`h-15 w-auto max-w-42.5 object-contain transition-opacity duration-300 sm:h-12 ${
                  i === index ? "opacity-100" : "opacity-35 hover:opacity-60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile: See all stories drops below the logos */}
        <Button href={HREF} variant="dark" className="mt-8 sm:hidden">
          See all stories
        </Button>
      </Container>
    </section>
  );
}
