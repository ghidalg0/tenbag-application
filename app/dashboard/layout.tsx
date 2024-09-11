import { Navbar } from "@/components/custom/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <Navbar />
      <main className="ps-[280px] pe-16 w-full">{children}</main>
    </div>
  );
}
