import Sidebar from "@/app/ui/Sidebar/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen text-black bg-[#FEF3E2]">
      <div className="p-2 ">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 h-auto overflow-y-auto text-black">
        {children}
      </div>
    </div>
  );
}
