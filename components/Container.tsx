import type { ReactNode } from "react";

/** Centered page-width wrapper matching Photoroom's content column. */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-304 px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
