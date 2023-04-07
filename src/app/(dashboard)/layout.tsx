import SideNavbar from "@/components/SideNavbar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex">
        <SideNavbar />
        <div className="w-full mt-14 ml-[19rem] pr-[1rem] overflow-y-hidden">
          {children}
        </div>
      </div>
    </>
  );
}
