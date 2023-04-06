import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";

const Inventory = () => {
  const labels: React.ReactNode = (
    <>
      <h2 className="text-xl font-bold">Part Information</h2>
      <div className="grid grid-cols-1 gap-6">
        <label htmlFor="" className="block">
          <span className="text-slate-700">Name</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>
        <label htmlFor="" className="block">
          <span className="text-slate-700">Description</span>
          <textarea
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
          ></textarea>
        </label>

        <label htmlFor="" className="block">
          <span className="text-slate-700">Category</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>

        <label htmlFor="" className="block">
          <span className="text-slate-700">Cost</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>

        <label htmlFor="" className="block">
          <span className="text-slate-700">Cost</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>

        <label htmlFor="" className="block">
          <span className="text-slate-700">Cost</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>
      </div>
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
