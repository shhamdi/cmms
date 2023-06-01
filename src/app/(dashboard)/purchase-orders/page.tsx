"use client";
import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";
import labels from "./labels";
import Example from "./Example";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

const PurchaseOrders = () => {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Purchase Orders" />
        <AddElement
          triggerName="Add Purchase Order"
          title="Add Purchase Order"
          description=""
        />
      </ModuleHeader>
      <div className="mt-16">
        <Example />
      </div>
    </>
  );
};

export default PurchaseOrders;
