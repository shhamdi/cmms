"use client";
import { useState } from "react";
import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { List, MapPin, Plus, Search } from "lucide-react";
import labelsloc from "./labelsloc";
import Tablev from "./Tableview";

const Location = () => {
  return (
    <div className="relative">
      <header className="flex justify-between items-center w-full h-12">
        <div className="font-bold text-xl">Location</div>
        <AddElement
          triggerName="Add Location"
          title="Add Location"
          description=""
          labels={labelsloc}
        />
      </header>
      <div className="absolute left-[-1rem] right-[-1rem] h-[1px] bg-slate-100"></div>
      <div className="relative ">
        <div className="mt-16">
          <Tablev />
        </div>
      </div>
    </div>
  );
};

export default Location;
