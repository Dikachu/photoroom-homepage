import type { ReactNode } from "react";

/** Section header (title + optional right-aligned action) + body. */
export default function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-semibold text-db-text sm:text-[19px]">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
