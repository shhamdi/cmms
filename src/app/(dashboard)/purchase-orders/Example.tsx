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
