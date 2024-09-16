import { DashboardControls } from "@/components/custom/DashboardControls";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardControls />
      <main className="w-full">{children}</main>
    </div>
  );
}
