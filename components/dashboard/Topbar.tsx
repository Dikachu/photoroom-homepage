import { Search } from "./DashIcons";

/** Sticky page header: "Home" title + template search. */
export default function Topbar() {
  return (
    <div className="sticky top-0 z-30 flex items-center gap-4 bg-db-bg/85 px-5 py-4 backdrop-blur-md sm:px-6 lg:px-8">
      <h1 className="shrink-0 text-[26px] font-semibold text-db-text sm:text-[30px]">
        Home
      </h1>
      <div className="relative ml-auto w-full max-w-md">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-db-muted" />
        <input
          type="search"
          placeholder="Search a template"
          aria-label="Search a template"
          className="h-11 w-full rounded-xl border border-white/8 bg-db-surface pl-10 pr-4 text-[15px] text-db-text placeholder:text-db-muted focus:border-white/20 focus:outline-none"
        />
      </div>
    </div>
  );
}
