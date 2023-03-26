import SideNavbar from "@/components/SideNavbar";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <SideNavbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
