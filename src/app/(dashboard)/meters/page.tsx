import AddElement from "@/components/common/AddElement";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

export default function Meters() {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Meters" />
        <AddElement triggerName="Add Meter" title="Add Meter" description="" />
      </ModuleHeader>
    </>
  );
}
