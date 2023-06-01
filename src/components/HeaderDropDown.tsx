import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const HeaderDropDown = ({
  children,
  list,
}: {
  children: React.ReactNode;
  list: string[];
}) => {
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mr-7">
          {list.map((item, index) => {
            let href: string = "#";
            if (item === "Default dashboard") href = "/dashboard";
            return (
              <DropdownMenuItem key={index}>
                <Link href={href}>{item}</Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropDown;
