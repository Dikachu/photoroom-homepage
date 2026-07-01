import Button from "./Button";
import { HREF } from "@/lib/data";
import { ArrowRight } from "./icons";

function HeroCopy() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="heading-tight max-w-4xl text-[40px] font-normal text-ink sm:text-6xl lg:text-[84px]">
        Sell at first sight
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">
        The future-ready product visual solution for e‑commerce.
      </p>
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={HREF} variant="primary" size="lg" className="w-full sm:w-auto">
          Start creating
          <ArrowRight className="h-4.5 w-4.5" />
        </Button>
        <Button href={HREF} variant="white" size="lg" className="w-full sm:w-auto">
          Contact sales
        </Button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-cream">
      {/* Desktop: full-bleed video with the copy overlaid near the top */}
      <div className="relative hidden aspect-2.25/1 w-full overflow-hidden lg:block">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/home-desktop-en.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 flex justify-center px-6 pt-[6vw] xl:pt-24">
          <HeroCopy />
        </div>
      </div>

      {/* Mobile / tablet: copy first, then the video below */}
      <div className="lg:hidden">
        <div className="px-5 pb-9 pt-14 sm:pt-16">
          <HeroCopy />
        </div>
        <video
          className="block aspect-video w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/home-mobile-en.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
