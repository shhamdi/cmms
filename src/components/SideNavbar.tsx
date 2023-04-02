import NavLink from "./NavLink";
import { Briefcase, Construction, Map, Factory, Boxes } from "lucide-react";

const SideNavbar = () => {
  return (
    <div className="fixed left-0 h-full top-[3.5rem] flex flex-col p-4 border-r border-solid min-w-[18rem] bg-slate-50 text-slate-800 shadow-md">
      <NavLink name="Work Orders" route_segment="work-orders">
        <Briefcase size={18} />
      </NavLink>
      <NavLink
        name="Preventive Maintenance"
        route_segment="preventive-maintenance"
      >
        <Construction size={18} />
      </NavLink>
      <NavLink name="Locations" route_segment="locations">
        <Map size={18} />
      </NavLink>
      <NavLink name="Assets" route_segment="asset">
        <Factory size={18} />
      </NavLink>
      <NavLink name="Inventory" route_segment="inventory">
        <Boxes size={18} />
      </NavLink>
    </div>
  );
};

export default SideNavbar;
