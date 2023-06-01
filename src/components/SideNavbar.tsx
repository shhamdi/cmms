"use client";
import clsx from "clsx";
import NavLink from "./NavLink";
import {
  Home,
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
  ChevronLeft,
} from "lucide-react";

import { useState } from "react";

const SideNavbar = () => {
  const [hidden, setHidden] = useState(false);
  const [width, setWidth] = useState(288);

  return (
    <>
      <div className={clsx(hidden && "hidden")}>
        <div className={`relative h-full`} style={{ minWidth: width + "px" }}>
<<<<<<< HEAD
          <div className="absolute inset-0 flex flex-col p-4 border-r border-solid bg-slate-100 text-slate-800 shadow-md overflow-y-auto overflow-x-hidden">
            <NavLink name="Home" route_segment="home">
              <Home size={18} />
            </NavLink>

=======
          <div className="absolute inset-0 flex flex-col p-4 border-r border-solid bg-slate-800 text-white shadow-md overflow-y-auto overflow-x-hidden">
>>>>>>> b77668dc9fb0c751d3728df862d127aefe298f9f
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
        </div>
      </div>

      <>
        <div
          className={clsx("h-full w-[1.5rem] bg-white", !hidden && "hidden")}
        ></div>
        <div className="relative h-full w-[1.5rem] bg-white group">
          <button
            className={clsx(
              "absolute left-[-0.85rem] top-8 z-30 p-1 cursor-pointer bg-slate-200 border-2 border-slate-300 rounded-full",
              "hover:text-white hover:bg-blue-500 hover:border-white",
              hidden && "rotate-180",
              "transition-all"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setHidden(!hidden);
              if (width < 260) setWidth(288);
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <div
            className="absolute inset-0 bg-transparent cursor-ew-resize z-20"
            draggable={true}
            onDrag={(e) => {
              if (e.clientX === 0) return;
              if (hidden) setHidden(!hidden);
              setWidth(e.clientX);
              console.log(width);
            }}
            onDragEnd={(e) => {
              if (width < 260 && !hidden) setHidden(!hidden);
            }}
          ></div>
          <div className="absolute left-0 inset-y-0 z-10 w-[2px] bg-slate-200 group-hover:bg-blue-500 transition-all"></div>
        </div>
      </>
    </>
  );
};

export default SideNavbar;
