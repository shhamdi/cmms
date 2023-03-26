"use client";

import { useState } from "react";
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
}: {
  name: string;
  route_segment: string;
  icon: string;
}) => {

  return (
    <Link href={`/${route_segment}`}>
      <div className="flex flex-row items-center rounded-md p-3 hover:bg-slate-200">
        <IonIcon icon={fileTrayFullOutline} className="m-2"></IonIcon>
        <div>{name}</div>
      </div>
    </Link>
  );
};

export default NavLink;
