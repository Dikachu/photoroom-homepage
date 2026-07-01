/**
 * Shown (via CSS in globals.css) only when the viewport drops below the
 * supported minimum of 600px wide / 400px tall — mirrors the Photoroom web
 * "your browser window is too small" gate.
 */
export default function TooSmall() {
  return (
    <div className="db-toosmall fixed inset-0 z-100 flex-col bg-db-bg text-db-text">
      <div className="flex h-14 items-center gap-2 border-b border-white/6 px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/svg/inline-2.svg" alt="Photoroom" className="h-6 w-auto" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <h1 className="text-[18px] font-semibold">
          Your browser window is too small
        </h1>
        <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-db-muted">
          Resize your browser window to be at least 600px wide and 400px high to use Photoroom web.
        </p>
      </div>
    </div>
  );
}
