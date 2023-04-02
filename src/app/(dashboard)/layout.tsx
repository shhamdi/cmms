import SideNavbar from "@/components/SideNavbar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideNavbar />
        <div className="absolute top-[3.5rem] left-[18rem] ml-[1rem] mt-[1rem]">{children}</div>
      </div>
    </div>
  );
}
