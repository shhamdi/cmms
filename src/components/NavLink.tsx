"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({
  children,
  name,
  route_segment,
}: {
  children?: React.ReactNode;
  name: string;
  route_segment: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/${route_segment}`}
      className={`active:scale-95 whitespace-nowrap`}
    >
      <div
        className={`relative flex items-center w-full rounded-[3px] p-2 hover:bg-blue-200 hover:text-blue-800 focus:scale-75 transition-all ${
          pathname === "/" + route_segment ? "bg-blue-200 text-blue-800" : ""
        }`}
      >
        <div
          className={` ${
            pathname === "/" + route_segment
              ? "w-1.5 absolute top-[12px] left-0 bottom-[12px] bg-blue-700 rounded-full"
              : ""
          }`}
        ></div>
        <div className="mx-4">{children}</div>
        <div>{name}</div>
      </div>
    </Link>
  );
};

export default NavLink;
