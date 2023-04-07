"use client";
import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";
import labels from "./labels";
import Example from "./Example";

const PurchaseOrders = () => {
  return (
    <div className="relative">
      <header className="flex justify-between items-center w-full h-12">
        <div className="font-bold text-xl">Inventory</div>
        <AddElement title="Purchase Order" description="" labels={labels}>
          <Button category="primary">
            <Plus size={18} className="mr-1" />
            Purchase Order
          </Button>
        </AddElement>
      </header>

      <div className="absolute left-[-1rem] right-[-1rem] h-[1px] bg-slate-100"></div>
      <div className="mt-16">
        <Example />
      </div>
    </div>
  );
};

export default PurchaseOrders;
