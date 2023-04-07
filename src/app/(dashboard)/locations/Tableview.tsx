import React, { useMemo } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";

type Part = {
  title: string;
  address: string;
  parent_Location: string;
  workers: string[];
  teams: string[];
  vendors: string[];
  customers: string[];
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Part[] = [
  {
    title: "part 1",
    address: "description of part 1",
    parent_Location: "category 1",
    workers: ["worker 1", "worker 2", "worker 3"],
    teams: ["teams 1", "teams 2", "teams 3"],
    vendors: ["vendor 1", "vendor 2", "vendor 3"],
    customers: ["customer 1", "customer 2", "customer 3"],
  },
];

const Tablev = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Part>[]>(
    () => [
      {
        accessorKey: "title", //access nested data with dot notation
        header: "Title",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "parent_Location", //normal accessorKey
        header: "Parent Location",
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

export default Tablev;
