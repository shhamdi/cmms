import AddElement from "@/components/common/AddElement";
import ModuleHeader from "@/components/common/module_ui/ModuleHeader";
import ModuleTitle from "@/components/common/module_ui/ModuleTitle";

export default function Vendors() {
  return (
    <>
      <ModuleHeader>
        <ModuleTitle title="Vendors and Customers" />
        <AddElement
          triggerName="Add Vendor or Customer"
          title="Add Vendor or Customer"
          description=""
        />
      </ModuleHeader>
    </>
  );
}
