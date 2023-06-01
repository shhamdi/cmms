"use client";
import { useState } from "react";
import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { List, MapPin, Plus, Search } from "lucide-react";
import labelsloc from "./labelsloc";
import Tablev from "./Tableview";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

const Location = () => {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Locations" />
        <AddElement
          triggerName="Add Location"
          title="Add Location"
          description=""
        />
      </ModuleHeader>
    </>
  );
};

export default Location;
