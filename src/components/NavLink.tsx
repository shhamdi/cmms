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
    <Link href={`/${route_segment}`} className={`active:scale-95`}>
      <div
        className={`flex flex-row items-center rounded-[3px] p-2 hover:bg-blue-100 focus:scale-75 relative transition ${
          pathname === "/" + route_segment ? "bg-blue-100" : ""
        }`}
      >
        <div
          className={` ${
            pathname === "/" + route_segment
              ? "w-1.5 absolute top-[12px] left-0 bottom-[12px] bg-blue-800 rounded-full"
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
