import { TOOLS, HREF, type Tool } from "@/lib/dashboard";

function ToolTile({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  const visibilityClass = tool.hideOnSmall
    ? "hidden xl:flex"
    : tool.hideOnMobile
      ? "hidden min-[760px]:flex"
      : "flex";

  return (
    <a
      href={HREF}
      className={`group relative items-center gap-3 rounded-lg border px-3 py-3 transition-colors ${
        tool.highlight
          ? "border-brand/60 bg-brand/15 hover:bg-brand/20"
          : "border-white/8 bg-db-card hover:bg-db-hover"
      } ${visibilityClass}`}
    >
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
          tool.highlight
            ? "bg-brand/20 text-brand/60"
            : "bg-white/6 text-db-text"
        }`}
      >
        <Icon className="h-5.25 w-5.25" />
      </span>
      <span
        className={`min-w-0 text-[12px] font-medium leading-tight ${
          tool.highlight ? "text-brand/50" : "text-db-text"
        }`}
      >
        {tool.label}
      </span>
      {tool.badge && (
        <span className="absolute right-1 top-1 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-black/50">
          {tool.badge}
        </span>
      )}
    </a>
  );
}

/** 2-row tool launcher. Shows six below xl, then four below 760px. */
export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 min-[760px]:grid-cols-3 xl:grid-cols-5">
      {TOOLS.map((tool) => (
        <ToolTile key={tool.label} tool={tool} />
      ))}
    </div>
  );
}
