import { createFileRoute, Outlet } from "@tanstack/react-router";
import { VeritasDemoBar, VeritasFooter, VeritasHeader } from "@/components/veritas/Chrome";

export const Route = createFileRoute("/demo-2")({
  component: VeritasLayout,
});

function VeritasLayout() {
  return (
    <div className="theme-veritas flex min-h-screen flex-col bg-background font-body text-foreground">
      <VeritasDemoBar />
      <VeritasHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <VeritasFooter />
    </div>
  );
}
