import AddElement from "@/components/common/AddElement";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

export default function WorkOrder() {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Work Orders" />
        <AddElement
          triggerName="Add Work Order"
          title="Add Work Order"
          description=""
        />
      </ModuleHeader>
    </>
  );
}
