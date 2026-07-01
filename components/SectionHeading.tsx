import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  action?: ReactNode;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
  dark = false,
  className = "",
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={`${
        centered
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      } ${className}`}
    >
      <div className={centered ? "" : "max-w-2xl"}>
        <p className="text-sm font-medium text-brand sm:text-[15px]">{eyebrow}</p>
        <h2
          className={`heading-tight mt-3 text-[32px] font-normal sm:text-[40px] lg:text-[44px] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-lg ${
              dark ? "text-white/65" : "text-ink-soft"
            } ${centered ? "mx-auto max-w-xl" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
