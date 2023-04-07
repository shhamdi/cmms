import React, { useMemo } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";

type Part = {
  name: string;
  description: string;
  category: string;
  cost: number;
  quantity: number;
  workers: string[];
  teams: string[];
  vendors: string[];
  customers: string[];
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Part[] = [
  {
    name: "part 1",
    description: "description of part 1",
    category: "category 1",
    cost: 100,
    quantity: 150,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
  {
    name: "part 2",
    description: "description of part 2",
    category: "category 2",
    cost: 200,
    quantity: 45,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
  {
    name: "part 3",
    description: "description of part 3",
    category: "category 3",
    cost: 500,
    quantity: 98,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
  {
    name: "part 4",
    description: "description of part 4",
    category: "category 4",
    cost: 120,
    quantity: 12,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
  {
    name: "part 5",
    description: "description of part 5",
    category: "category 5",
    cost: 1000,
    quantity: 150,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
  {
    name: "part 6",
    description: "description of part 6",
    category: "category 6",
    cost: 78,
    quantity: 33,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
  {
    name: "part 7",
    description: "description of part 7",
    category: "category 7",
    cost: 100,
    quantity: 150,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
  {
    name: "part 8",
    description: "description of part 8",
    category: "category 8",
    cost: 670,
    quantity: 56,
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
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
        accessorKey: "cost",
        header: "Cost",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
      {
        accessorKey: "workers",
        header: "Workers",
      },
      {
        accessorKey: "teams",
        header: "Teams",
      },
      {
        accessorKey: "vendors",
        header: "Vendors",
      },
      {
        accessorKey: "customers",
        header: "Customers",
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;
