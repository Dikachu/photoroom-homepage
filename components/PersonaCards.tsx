import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { PERSONAS, HREF, type Persona } from "@/lib/data";

function PersonaCard({ persona }: { persona: Persona }) {
  const { dark, lime } = persona;
  return (
    <article
      className={`flex flex-col justify-between gap-8 rounded-3xl p-7 sm:p-8 ${
        dark ? "bg-ink text-white" : "bg-cream text-ink"
      }`}
    >
      <div>
        <h3 className="text-2xl font-medium">{persona.title}</h3>
        <p
          className={`mt-3 text-[15px] leading-relaxed ${
            dark ? "text-white/70" : "text-ink-soft"
          }`}
        >
          {persona.body}
        </p>
        <Button
          href={HREF}
          variant={lime ? "lime" : "primary"}
          className="mt-6"
        >
          {persona.cta}
        </Button>
      </div>

      <figure
        className={`border-t pt-6 ${dark ? "border-white/15" : "border-black/10"}`}
      >
        <Image
          src={persona.logo}
          alt=""
          width={120}
          height={40}
          className={`h-7 w-auto object-contain ${
            dark ? "opacity-90 brightness-0 invert" : "opacity-60"
          }`}
        />
        <blockquote
          className={`mt-4 text-[15px] leading-relaxed ${
            dark ? "text-white/80" : "text-ink-soft"
          }`}
        >
          “{persona.quote}”
        </blockquote>
        <figcaption className="mt-3 text-sm font-semibold">
          – {persona.author}
        </figcaption>
      </figure>
    </article>
  );
}

export default function PersonaCards() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="One platform, every stage of growth"
          title="Built for businesses that sell"
          subtitle="From solo entrepreneurs to enterprise teams, Photoroom scales with you and helps you sell more."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PERSONAS.map((p) => (
            <PersonaCard key={p.title} persona={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
