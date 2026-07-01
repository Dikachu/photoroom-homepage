import type { Metadata } from "next";
import { CLASSICS, STUDIO, ESSENTIALS, HREF } from "@/lib/dashboard";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import EmpowerBanner from "@/components/dashboard/EmpowerBanner";
import ToolsGrid from "@/components/dashboard/ToolsGrid";
import GetStarted from "@/components/dashboard/GetStarted";
import TemplateRow from "@/components/dashboard/TemplateRow";
import TooSmall from "@/components/dashboard/TooSmall";

export const metadata: Metadata = {
  title: "Home | Photoroom",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <>
      <TooSmall />

      <div className="db-shell flex h-screen overflow-hidden bg-db-bg text-db-text">
        <Sidebar />

        <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
          <Topbar />

          <div className="space-y-9 px-5 pb-14 pt-1 sm:px-6 lg:px-8">
            <EmpowerBanner />
            <ToolsGrid />
            <GetStarted />
            <TemplateRow title="Classics" items={CLASSICS} />
            <TemplateRow title="Studio" items={STUDIO} shape="portrait" />
            <TemplateRow title="Essentials" items={ESSENTIALS} />

            <div className="flex justify-center pt-2">
              <a
                href={HREF}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-db-card px-6 text-[15px] font-medium text-db-text transition-colors hover:bg-db-hover"
              >
                Show more
              </a>
            </div>
          </div>
        </main>

        {/* Floating help launcher */}
        <button
          type="button"
          aria-label="Help"
          className="fixed bottom-4 right-4 z-40 grid h-10 w-10 place-items-center rounded-full bg-db-card-2 text-[16px] font-semibold text-db-muted shadow-[0_4px_16px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-colors hover:bg-db-hover hover:text-db-text"
        >
          ?
        </button>
      </div>
    </>
  );
}
