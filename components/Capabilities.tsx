import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { CAPABILITIES, HREF } from "@/lib/data";

export default function Capabilities() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Built for e‑commerce"
          title="See what Photoroom can do"
          subtitle="AI product image generator, background remover, and visual editor, built for the way e‑commerce works."
        />

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <article key={cap.title} className="flex flex-col">
              <div className="relative aspect-3/2 overflow-hidden rounded-3xl bg-cream">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  sizes="(min-width:640px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-medium text-ink">{cap.title}</h3>
              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                {cap.body}
              </p>
              <a
                href={HREF}
                className="mt-5 inline-flex h-10 w-fit items-center justify-center rounded-xl bg-white px-4 text-[15px] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] ring-1 ring-black/6 transition-colors hover:bg-cream"
              >
                Learn more
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
