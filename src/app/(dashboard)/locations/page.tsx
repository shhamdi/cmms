"use client";
import AddElement from "@/components/common/AddElement";
import Button from "@/components/common/Button";
import { List, MapPin, Plus, Search } from "lucide-react";
import { ButtonGroup } from "react-bootstrap";

const Location = () => {
  const labels: React.ReactNode = (
    <>
      <h2 className="text-xl font-bold">Location Information</h2>
      <div className="grid grid-cols-1 gap-6">
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

        <label htmlFor="" className="block">
          <span className="text-slate-700">Worker</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>

        <label htmlFor="" className="block">
          <span className="text-slate-700">Team</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder=""
          />
        </label>

        <label htmlFor="" className="block">
          <span className="text-slate-700">Vendor</span>
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
        <div className="font-bold text-xl">Location</div>
      </header>
      <div className="absolute left-[-1rem] right-[-1rem] h-[1px] bg-slate-100"></div>
      <div className="relative">
        <header className="flex justify-between items-center w-full h-12">
          <ButtonGroup className="flex justify-between items-center h-6 px-5 py-2 rounded-sm  ">
            <button className="flex justify-between items-center bg-gray-300 text-white px-2   hover:bg-blue-500">
              <List size={15} className="flex mr-1" />
              List view
            </button>

            <button className="flex justify-between items-center bg-gray-300 text-white px-2   hover:bg-blue-500">
              <MapPin size={15} className="flex mr-1"></MapPin>
              Map view
            </button>
            <div className="hover:outline outline-offset-1 outline-blue-400 flex justify-between items-center px-1 py-1 ml-4 h-6  rounded-md border border-slate-300 bg-transparent text-sm placeholder:text-slate-400   dark:text-slate-500 dark:focus:ring-slate-400">
              <Search size={25} className=" px-1" />
              <input
                placeholder="Search Locations"
                className="px-1 placeholder:text-slate-400 dark:focus:ring-slate-400 outline-offset-0 outline-white h-4"
              ></input>
            </div>
          </ButtonGroup>

          <AddElement title="Create Part" description="" labels={labels}>
            <Button>
              <Plus size={18} className="mr-1" />
              Add Location
            </Button>
          </AddElement>
        </header>
        <div className="absolute left-[-1rem] right-[-1rem] h-[1px] bg-slate-100"></div>
      </div>
    </div>
  );
};

export default Location;
