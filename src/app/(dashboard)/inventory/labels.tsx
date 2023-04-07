import Button from "@/components/common/Button";
import DropFile from "@/components/common/DropFile";

const labels: React.ReactNode = (
  <>
    <h2 className="text-xl font-bold my-8">Part Information</h2>
    <div className="grid grid-cols-1 gap-4">
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
        <span>Cost</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder=""
        />
      </label>
    </div>

    <h2 className="text-xl font-bold my-8">Image</h2>
    <DropFile />

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

    <h2 className="text-xl font-bold my-8">More Information</h2>
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
      <label htmlFor="" className="block">
        <span className="text-slate-700">Additional Information</span>
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
    </div>

    <h2 className="text-xl font-bold my-8">Files</h2>
    <DropFile />
  </>
);

export default labels;
