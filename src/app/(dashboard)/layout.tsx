import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      {/* give a fixed width to sidebar and let main take all the available space */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
