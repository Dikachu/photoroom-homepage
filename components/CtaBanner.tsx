import Image from "next/image";
import Button from "./Button";
import { HREF } from "@/lib/data";
import { ArrowRight } from "./icons";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <Image
        src="/images/footer_take_action.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="mx-auto flex max-w-304 flex-col items-center px-5 py-24 text-center sm:px-6 sm:py-28 lg:py-32">
        <h2 className="heading-tight text-[34px] font-normal text-white sm:text-5xl lg:text-[56px]">
          Start selling at first sight
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Get listing-ready product visuals in seconds.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button href={HREF} variant="lime" size="lg" className="w-full sm:w-auto">
            Start free trial
            <ArrowRight className="h-4.5 w-4.5" />
          </Button>
          <Button href={HREF} variant="glass" size="lg" className="w-full sm:w-auto">
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
}
