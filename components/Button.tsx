import type { AnchorHTMLAttributes, ReactNode } from "react";
import { HREF } from "@/lib/data";

type Variant = "primary" | "white" | "dark" | "lime" | "outline" | "glass";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-xl font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.98] select-none";

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-[15px]",
  lg: "h-12 px-5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_1px_2px_rgba(73,47,251,0.35)] hover:bg-brand-dark",
  white:
    "bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_14px_rgba(0,0,0,0.06)] hover:bg-cream",
  dark: "bg-ink text-white hover:bg-black",
  lime: "bg-[linear-gradient(115deg,#ecf693_0%,#dcf160_45%,#cbef4a_100%)] text-ink hover:brightness-[0.97]",
  outline:
    "bg-white/60 text-ink ring-1 ring-black/10 hover:bg-white hover:ring-black/20",
  glass:
    "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm hover:bg-white/25",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href = HREF,
  ...rest
}: Props) {
  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
