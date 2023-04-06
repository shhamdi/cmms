import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";

const Inventory = () => {
  const labels: React.ReactNode = (
    <>
      <div>test</div>
    </>
  );
  return (
    <div className="relative">
      <header className="flex justify-between items-center w-full h-12">
        <div className="font-bold text-xl">Inventory</div>
        <AddElement title="Create Part" description="" labels={labels}>
          <Button>
            <Plus size={18} className="mr-1" />
            Create Part
          </Button>
        </AddElement>
      </header>
      <div className="absolute left-[-1rem] right-[-1rem] h-[1px] bg-slate-100"></div>
    </div>
  );
};

export default Inventory;
