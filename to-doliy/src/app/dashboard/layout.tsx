import Sidebar from "@/app/ui/Sidebar/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="p-2 ">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 ">
        {children}
      </div>
    </div>
  );
}
