import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { BRAND_LOGOS, HREF } from "@/lib/data";

export default function LogoStrip() {
  const logos = BRAND_LOGOS.slice(0, 12);

  return (
    <section className="bg-white py-10 sm:py-14">
      <Container>
        <div className="grid gap-7 rounded-3xl bg-cream p-6 sm:p-8 lg:grid-cols-[minmax(220px,1fr)_2fr] lg:items-center lg:gap-10 lg:p-9">
          {/* Logos — on top on mobile, on the right on desktop */}
          <div className="order-1 grid grid-cols-3 gap-2.5 lg:order-2 lg:grid-cols-6 lg:gap-3">
            {logos.map((logo, i) => (
              <div
                key={logo.name}
                className={`aspect-16/10 items-center justify-center rounded-xl bg-white px-3 ${
                  i >= 6 ? "hidden lg:flex" : "flex"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={142}
                  height={80}
                  className="h-auto w-full max-w-22 object-contain opacity-90"
                />
              </div>
            ))}
          </div>

          {/* Copy — below logos on mobile, on the left on desktop */}
          <div className="order-2 lg:order-1">
            <p className="max-w-xs text-xl font-medium text-ink sm:text-[22px]">
              Join 1M+ businesses selling more with Photoroom
            </p>
            <Button href={HREF} variant="white" className="mt-5">
              Discover our case studies
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
