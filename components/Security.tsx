import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { SECURITY, HREF } from "@/lib/data";

export default function Security() {
  return (
    <section className="bg-night py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="left"
          dark
          eyebrow="Security by design"
          title="Enterprise-grade security"
          subtitle="Built for businesses that take trust seriously."
          action={
            <Button href={HREF} variant="lime">
              Visit Trust Center
            </Button>
          }
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY.map((item) => (
            <article
              key={item.title}
              className="flex min-h-80 flex-col justify-between rounded-[26px] bg-night-card p-7"
            >
              <Image
                src={item.image}
                alt=""
                width={item.wide ? 220 : 96}
                height={96}
                className="h-16 w-auto self-start object-contain"
              />
              <div>
                <h3 className="text-[21px] font-medium leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
