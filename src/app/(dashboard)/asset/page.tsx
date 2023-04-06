import AddElement from "@/components/common/AddElement";
import { Plus } from "lucide-react";
import Button from "@/components/common/Button";
import Forms from "./Forms";
const Assets = () => {
  const labels: React.ReactNode = <>{/* <Forms /> */}</>;
  return (
    <div className="relative">
      <header className="flex justify-between items-center w-full h-12">
        <div className="font-bold text-xl">Assets</div>
        <AddElement title="Create Part" description="" labels={labels}>
          <Button>
            <Plus size={18} className="mr-1" />
            Add Asset
          </Button>
        </AddElement>
      </header>
      <div className="absolute left-[-1rem] right-[-1rem] h-[1px] bg-slate-100"></div>
    </div>
  );
};

export default Assets;
