"use client";
import React from "react";

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
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleChange}
            value={formData.image}
            name="image"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
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

          <div className="currency-wrap">
            <span className="currency-code">TND</span>
            <input
              type="number"
              id="purchaseprice"
              onChange={handleChange}
              value={formData.purchasePrice}
              name="purchasePrice"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
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
          <div className="currency-wrap">
            <span className="currency-code">TND</span>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              id="residualvalue"
              onChange={handleChange}
              value={formData.residualValue}
              name="residualValue"
            />
          </div>
        </label>

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

        <label htmlFor="" className="block">
          <input
            type="select"
            onChange={handleChange}
            value={formData.time}
            name="time"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <option value="year">years</option>
          <option value="month">months</option>
          <option value="week">weeks</option>
          <option value="day">days</option>
        </label>

        <label htmlFor="" className="block">
          <label htmlFor="receipt" className="text-slate-700">
            Upload purchase receipt
          </label>
          <input
            type="file"
            id="receipt"
            onChange={handleChange}
            value={formData.receipt}
            name="receipt"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></input>
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
            <label htmlFor="warranty" className="text-slate-700">
              Upload warranty file{" "}
            </label>
            <input
              type="file"
              id="warranty"
              onChange={handleChange}
              value={formData.uploadWarranty}
              name="uploadWarranty"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
        </div>
      </div>
      <h2 className="text-xl font-bold">Parts </h2>
      <div className="grid grid-cols-1 gap-6">
        <label htmlFor="" className="block">
          <input
            type="file"
            onChange={handleChange}
            value={formData.file1}
            name="file1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <input type="submit"></input>
    </form>
  );
};

export default Forms;
