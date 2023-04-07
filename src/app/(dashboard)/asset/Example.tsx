import React, { useMemo } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";

type Part = {
  name: string;
  description: string;
  model: string;
  category: string;
  area: string;

  purchasePrice: number;
  purchaseDate: string;
  residualValue: number;
  usefulLife: number;
  time: string;

  worker: string[];
  additionalWorker: string[];
  teams: string[];
  vendors: string[];
  customers: string[];
  placedInService: string;
  warranty: string;
  additionalInformation: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Part[] = [
  {
    name: "asset 1",
    description: "description of asset 1",
    category: "category 1",
    model: "model1",
    area: "area1",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time1",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: "12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information1",
  },
  {
    name: "asset 2",
    description: "description of asset 2",
    category: "category 2",
    model: "model2",
    area: "area2",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time2",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: "12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information2",
  },
  {
    name: "asset 3",
    description: "description of asset 3",
    category: "category 3",
    model: "model3",
    area: "area3",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time3",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: "12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information3",
  },
  {
    name: "asset 4",
    description: "description of asset 4",
    category: "category 4",
    model: "model4",
    area: "area4",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time4",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: "12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information4",
  },
  {
    name: "asset 5",
    description: "description of asset 5",
    category: "category 5",
    model: "model5",
    area: "area5",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time5",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: "12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information5",
  },
  {
    name: "asset 6",
    description: "description of asset 6",
    category: "category 6",
    model: "model6",
    area: "area6",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time6",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: " 12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information 6",
  },
  {
    name: "asset 7",
    description: "description of asset 7",
    category: "category 7",
    model: "model7",
    area: "area7",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time7",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: "12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information7",
  },
  {
    name: "asset 8",
    description: "description of asset 8",
    category: "category 8",
    model: "model8",
    area: "area8",

    purchasePrice: 1000,
    purchaseDate: "12/12/2021",
    residualValue: 120,
    usefulLife: 10,
    time: "time8",

    worker: ["worker 1", "worker 2", "worker 3"],
    additionalWorker: [
      "additional worker1",
      "additional worker2",
      "additionalworker3",
    ],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
    placedInService: "12/12/2021",
    warranty: "12/12/2021",
    additionalInformation: "additional Information8",
  },
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Part>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        accessorKey: "category", //normal accessorKey
        header: "Category",
      },
      {
        accessorKey: "model",
        header: "Model",
      },

      {
        accessorKey: "purchasePrice",
        header: "Purchase Price",
      },
      {
        accessorKey: "area",
        header: "Area",
      },
      {
        accessorKey: "purchaseDate",
        header: "purchase Date",
      },
      {
        accessorKey: "residualValue",
        header: "Residual Value",
      },
      {
        accessorKey: "usefulLife",
        header: "useful Life",
      },
      {
        accessorKey: "time",
        header: "Time",
      },
      {
        accessorKey: "worker",
        header: "Worker",
      },
      {
        accessorKey: "additionalWorker",
        header: "Additional Worker",
      },
      {
        accessorKey: "warranty",
        header: "Warranty",
      },
      {
        accessorKey: "vendors",
        header: "Vendors",
      },
      {
        accessorKey: "customers",
        header: "Customers",
      },
      {
        accessorKey: "placedInService",
        header: "Placed In Service",
      },
      {
        accessorKey: "additionalInformation",
        header: "Additional Information",
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;
