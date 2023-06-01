import AddElement from "@/components/common/AddElement";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

export default function Documents() {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Documents" />
        <AddElement
          triggerName="Add Document"
          title="Add Document"
          description=""
        />
      </ModuleHeader>
    </>
  );
}
