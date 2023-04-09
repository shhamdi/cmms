"use client";
import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";
import labels from "./labels";
import Example from "./Example";
import ModuleHeader from "@/components/common/ModuleHeader";

const Inventory = () => {
  return (
    <>
      <ModuleHeader>
        <div className="font-bold text-xl">Inventory</div>
        <AddElement title="Create Part" description="" labels={labels}>
          <Button category="primary">
            <Plus size={18} className="mr-1" />
            Create Part
          </Button>
        </AddElement>
      </ModuleHeader>

      {/* <div className="mt-16">
        <Example />
      </div> */}
    </>
  );
};

export default Inventory;
