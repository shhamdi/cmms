"use client";
import DropFile from "@/components/common/DropFile";

import { useState } from "react";

const Forms = () => {
  const [randomValue, setRandomValue] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    model: "",
    category: "",
    area: "",
    barchoice: "",
    barCode: 0,
    randombar: randomValue,
    image: "",
    purchasePrice: 0,
    purchaseDate: "",
    residualValue: 0,
    usefulLife: 0,
    time: "",
    receipt: "",
    worker: "",
    additionalWorker: "",
    teams: "",
    vendors: "",
    customers: "",
    placedInService: "",
    warranty: "",
    additionalInformation: "",
    uploadWarranty: "",
    file1: "",
    file2: "",
  });

  const [isRandom, setIsRandom] = useState(false);
  function israndom() {
    setIsRandom(!isRandom);
  }
  function random() {
    setRandomValue((prev) => Math.floor(Math.random() * 1000000000) + 1);
  }
  function toDo() {
    israndom();
    random();
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl font-bold">Asset Information</h1>
      <div className="grid grid-cols-1 gap-6">
        <label htmlFor="" className="block">
          <label htmlFor="name" className="text-slate-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formData.name}
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label htmlFor="" className="block">
          <label htmlFor="description" className="text-slate-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </label>
        <label htmlFor="" className="block">
          <label htmlFor="model" className="text-slate-700">
            Model
          </label>
          <input
            type="text"
            id="model"
            onChange={handleChange}
            value={formData.model}
            name="model"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="" className="block">
          <label htmlFor="category" className="text-slate-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            onChange={handleChange}
            value={formData.category}
            name="category"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="" className="block">
          <label htmlFor="area" className="text-slate-700">
            Area
          </label>
          <input
            type="text"
            id="area"
            onChange={handleChange}
            value={formData.area}
            name="area"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="" className="block">
          <label htmlFor="image" className="text-slate-700">
            Image
          </label>
          <DropFile />
        </label>
      </div>
      <h2 className="text-xl font-bold">Depreciation</h2>
      <div className="grid grid-cols-1 gap-6">
        <p>
          Depreciation data helps you track the asset value over time and at the
          end of its life cycle
        </p>

        <label htmlFor="" className="block">
          <label htmlFor="purchaseprice " className="text-slate-700">
            Purchase Price
          </label>

          <input
            type="number"
            id="purchaseprice"
            onChange={handleChange}
            value={formData.purchasePrice}
            name="purchasePrice"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="" className="block">
          <label htmlFor="purchasedate" className="text-slate-700">
            Purchase Date
          </label>
          <input
            type="date"
            id="purchasedate"
            onChange={handleChange}
            value={formData.purchaseDate}
            name="purchaseDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="" className="block">
          <label htmlFor="residualvalue">Residual Value</label>

          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="residualvalue"
            onChange={handleChange}
            value={formData.residualValue}
            name="residualValue"
          />
        </label>
        <div className="flex items-center justify-between">
          <label htmlFor="" className="block">
            <label htmlFor="useFullife" className="text-slate-700">
              Useful Life
            </label>
            <input
              type="number"
              id="useFullife"
              onChange={handleChange}
              value={formData.usefulLife}
              name="usefulLife"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>

          <label htmlFor="" className="block mt-[22px]">
            <select
              value={formData.time}
              name="time"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="year">years</option>
              <option value="month">months</option>
              <option value="week">weeks</option>
              <option value="day">days</option>
            </select>
          </label>
        </div>

        <label htmlFor="" className="block">
          <label htmlFor="receipt" className="text-slate-700">
            Upload purchase receipt
          </label>
          <DropFile />
        </label>
      </div>
      <h2 className="text-xl font-bold">Assigned To</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="assign">
          <label htmlFor="" className="block">
            <label htmlFor="worker" className="text-slate-700">
              Worker
            </label>
            <input
              type="text"
              id="worker"
              onChange={handleChange}
              value={formData.worker}
              name="worker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="" className="block">
            <label htmlFor="additionalworkers">Additional Workers</label>
            <input
              type="text"
              id="additionalworkers"
              onChange={handleChange}
              value={formData.additionalWorker}
              name="additionalWorker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></input>
          </label>
          <label htmlFor="" className="block">
            <label htmlFor="teams" className="text-slate-700">
              Teams
            </label>
            <input
              type="text"
              id="teams"
              onChange={handleChange}
              value={formData.teams}
              name="teams"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
        </div>
      </div>

      <h2 className="text-xl font-bold">More Information</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="moreInformation">
          <label htmlFor="" className="block">
            <label htmlFor="vendors" className="text-slate-700">
              Vendors
            </label>
            <input
              type="text"
              id="vendors"
              onChange={handleChange}
              value={formData.vendors}
              name="vendors"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="" className="block">
            <label htmlFor="customers" className="text-slate-700">
              Customers
            </label>
            <input
              type="text"
              id="customers"
              onChange={handleChange}
              value={formData.customers}
              name="customers"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>

          <label htmlFor="" className="block">
            <label htmlFor="placedInServiceDate" className="text-slate-700">
              Placed in Service Date
            </label>
            <input
              type="text"
              id="placedInServiceDate"
              onChange={handleChange}
              value={formData.placedInService}
              name="placedInService"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>

          <label htmlFor="" className="block">
            <label htmlFor="WarrantyExpirationDate" className="text-slate-700">
              Warranty Expiration Date
            </label>
            <input
              type="date"
              id="WarrantyExpirationDate"
              onChange={handleChange}
              value={formData.warranty}
              name="warranty"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>

          <label htmlFor="" className="block">
            <label htmlFor="additionalInformation" className="text-slate-700">
              Additional Information
            </label>
            <input
              type="text"
              id="additionalInformation"
              onChange={handleChange}
              value={formData.additionalInformation}
              name="additionalInformation"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="" className="block">
            <label className="text-slate-700">Upload warranty file </label>
            <DropFile />
          </label>
        </div>
      </div>
      <h2 className="text-xl font-bold">Parts </h2>

      <DropFile />
    </form>
  );
};

export default Forms;
