import SideNavbar from "@/components/SideNavbar";
import Header from "@/components/Header";
import Resizable from "@/components/Resizable";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="fixed inset-0 flex mt-14 z-50">
        <SideNavbar />
        <div className="w-full h-full px-[1rem] overflow-y-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
