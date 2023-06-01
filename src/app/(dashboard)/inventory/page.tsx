import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";
import labels from "./labels";
import Example from "./Example";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

const Inventory = () => {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Inventory" />
        <AddElement
          triggerName="Create Part"
          title="Create Part"
          description=""
          labels={labels}
        />
      </ModuleHeader>
    </>
  );
};

export default Inventory;
