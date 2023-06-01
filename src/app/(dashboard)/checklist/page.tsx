import AddElement from "@/components/common/AddElement";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

export default function Checklists() {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Checklists" />
        <AddElement
          triggerName="Create Checklist"
          title="Create Checklist"
          description=""
        />
      </ModuleHeader>
    </>
  );
}
