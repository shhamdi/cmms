import AddElement from "@/components/common/AddElement";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

export default function PreventiveMaint() {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Preventive Maintenance" />
        <AddElement
          triggerName="Add Preventive Maintenance"
          title="Add Preventive Maintenance"
          description=""
        />
      </ModuleHeader>
    </>
  );
}
