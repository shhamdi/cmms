import Button from "@/components/common/Button";
import PopoverDemo from "./Pop";
import { Plus } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
const labelsloc: React.ReactNode = (
  <>
    <h2 className="text-xl font-bold my-8">Location Information</h2>
    <div className="grid grid-cols-1 gap-4">
      <label htmlFor="" className="block">
        <span className="text-slate-700">Title</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder=""
        />
      </label>
      <label htmlFor="" className="block">
        <span className="text-slate-700">Address</span>
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
        <span className="text-slate-700">Parent Location</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder=""
        />
      </label>
    </div>

    <h2 className="text-xl font-bold my-8">Assigned To</h2>
    <div className="grid grid-cols-1 gap-4">
      <label className="block">
        <span>Workers</span>
        <select
          className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
        ></select>
      </label>
      <label className="block">
        <span>Teams</span>
        <select
          className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
        ></select>
      </label>
    </div>

    <div className="grid grid-cols-1 gap-4">
      <label className="block">
        <span>Vendors</span>
        <select
          className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
        ></select>
      </label>
      <label className="block">
        <span>Customers</span>
        <select
          className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
        ></select>
      </label>
      <label className="block">
        <div>
          <button className="flex justify-between items-center  text-blue-500">
            <Plus size={20} className="px-1"></Plus>
            Custom Data
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Include Map Coordinates
          </label>
        </div>
      </label>
    </div>
  </>
);

export default labelsloc;
