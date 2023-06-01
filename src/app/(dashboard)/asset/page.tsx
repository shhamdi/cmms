"use client";
import AddElement from "@/components/common/AddElement";
import { Plus } from "lucide-react";
import Button from "@/components/common/Button";
import Forms from "./Forms";
import Example from "./Example";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";
const Assets = () => {
  const labels: React.ReactNode = <>{<Forms />}</>;
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Assets" />
        <AddElement
          triggerName="Create Asset"
          title="Create Asset"
          description=""
          labels={labels}
        />
      </ModuleHeader>
      <div>
        <Example />
      </div>
    </>
  );
};

export default Assets;
