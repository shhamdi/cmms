"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import {
  fileTrayFullOutline,
  shieldCheckmarkOutline,
  locationOutline,
  constructOutline,
  extensionPuzzleOutline,
} from "ionicons/icons";

const NavLink = ({
  name,
  route_segment,
  icon,
  notif,
}: {
  name: string;
  route_segment: string;
  icon: string;
  notif: number;
}) => {
  const pathname = usePathname();

  let icon_url;
  switch (icon) {
    case "fileTrayFullOutline":
      icon_url = fileTrayFullOutline;
      break;
    case "shieldCheckmarkOutline":
      icon_url = shieldCheckmarkOutline;
      break;
    case "locationOutline":
      icon_url = locationOutline;
      break;
    case "constructOutline":
      icon_url = constructOutline;
      break;
    case "extensionPuzzleOutline":
      icon_url = extensionPuzzleOutline;
      break;
  }

  return (
    <Link href={`/${route_segment}`} className={`active:scale-95`}>
      <div
        className={`flex flex-row items-center rounded-sm p-1 hover:bg-slate-100 focus:scale-75 relative transition ${
          pathname === "/" + route_segment ? "bg-slate-100" : ""
        }`}
      >
        <div
          className={` ${
            pathname === "/" + route_segment
              ? "w-1.5 absolute top-2 left-0 bottom-2 bg-slate-600 rounded-full"
              : ""
          }`}
        ></div>
        <IonIcon icon={icon_url} className="m-2"></IonIcon>
        <div>{name}</div>
        {notif !== 0 ? (
          <div className="flex justify-center absolute right-3 bg-red-600 text-white rounded-3xl w-7">
            <div>{notif}</div>
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default NavLink;
