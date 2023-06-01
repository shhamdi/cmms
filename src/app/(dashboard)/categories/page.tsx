import AddElement from "@/components/common/AddElement";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

export default function Categories() {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Categories" />
        <AddElement
          triggerName="Create Category"
          title="Create Category"
          description=""
        />
      </ModuleHeader>
    </>
  );
}
