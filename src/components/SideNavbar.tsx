import NavLink from "./NavLink";
import {
  Briefcase,
  Construction,
  Map,
  Factory,
  Boxes,
  FileCheck2,
  Gauge,
  Contact,
  ListChecks,
  Bookmark,
  Files,
} from "lucide-react";

const SideNavbar = () => {
  return (
    <div className="fixed left-0 bottom-0 top-[3.5rem] flex flex-col p-4 border-r border-solid min-w-[18rem] bg-slate-100 text-slate-800 shadow-md overflow-y-auto">
      <NavLink name="Work Orders" route_segment="work-orders">
        <Briefcase size={18} />
      </NavLink>

      <NavLink
        name="Preventive Maintenance"
        route_segment="preventive-maintenance"
      >
        <Construction size={18} />
      </NavLink>

      <div className="w-full h-6 flex-shrink-0"></div>

      <NavLink name="Locations" route_segment="locations">
        <Map size={18} />
      </NavLink>

      <NavLink name="Assets" route_segment="asset">
        <Factory size={18} />
      </NavLink>

      <NavLink name="Inventory" route_segment="inventory">
        <Boxes size={18} />
      </NavLink>

      <NavLink name="Purchase Orders" route_segment="purchase-orders">
        <FileCheck2 size={18} />
      </NavLink>

      <NavLink name="Meters" route_segment="meters">
        <Gauge size={18} />
      </NavLink>

      <div className="w-full h-6 flex-shrink-0"></div>

      <NavLink name="Vendors & Custormers" route_segment="vendors">
        <Contact size={18} />
      </NavLink>

      <div className="w-full h-6 flex-shrink-0"></div>

      <NavLink name="Checklists" route_segment="checklist">
        <ListChecks size={18} />
      </NavLink>

      <NavLink name="Categories" route_segment="categories">
        <Bookmark size={18} />
      </NavLink>

      <NavLink name="Documents" route_segment="documents">
        <Files size={18} />
      </NavLink>
    </div>
  );
};

export default SideNavbar;
