import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DemoSwitcher, HarringtonFooter, HarringtonHeader } from "@/components/harrington/Chrome";

export const Route = createFileRoute("/demo-1")({
  component: HarringtonLayout,
});

function HarringtonLayout() {
  return (
    <div className="theme-harrington flex min-h-screen flex-col bg-background font-body text-foreground">
      <DemoSwitcher current={1} />
      <HarringtonHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <HarringtonFooter />
    </div>
  );
}
