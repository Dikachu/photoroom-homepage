"use client";

import { type Template } from "@/lib/dashboard";
import { Sparkle } from "./DashIcons";
import Section from "./Section";
import ScrollRow from "./ScrollRow";

/**
 * Gallery rail for the template collections (Classics / Studio / Essentials).
 * Tiles are static square previews (no navigation); `Classics` shows a caption
 * underneath, `Studio` shows the AI sparkle badge.
 */
export default function TemplateRow({
  title,
  items,
}: {
  title: string;
  items: Template[];
}) {
  return (
    <Section title={title}>
      <ScrollRow ariaLabel={title} className="gap-3 pb-1">
        {items.map((item, i) => (
          <figure key={item.image ?? i} className="shrink-0">
            <div className="relative size-36 overflow-hidden rounded-xl bg-db-card ring-1 ring-white/6 sm:size-40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.label ?? title}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {item.badge && (
                <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-lg bg-white text-ink shadow-sm">
                  <Sparkle className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
            {item.label && (
              <figcaption className="mt-2 px-0.5 text-[13px] font-medium text-db-muted">
                {item.label}
              </figcaption>
            )}
          </figure>
        ))}
      </ScrollRow>
    </Section>
  );
}
