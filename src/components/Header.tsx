import Account from "./Account";
import NavButton from "./NavButton";
import { Codesandbox, Bell } from "lucide-react";

const Header = () => {
  const navbar = ["Your Work", "Dashboards", "Teams"];

  return (
    <div className="fixed top-0 w-full z-10 bg-white border-b shadow-sm px-3 text-slate-700">
      <header className="flex items-center justify-between h-14">
        <nav className="flex items-center h-full">
          <div className="flex items-center p-1 hover:bg-blue-100 cursor-pointer rounded-[3px]">
            <Codesandbox />
            <div className="font-bold ml-2">CMM SOFTWARE</div>
          </div>
          <div className="w-20"></div>
          <div className="flex items-center">
            {navbar.map((name, index) => (
              <NavButton name={name} key={index} />
            ))}
          </div>
        </nav>
        <div className="flex items-center">
          <div className="mx-4 p-2 rounded-full hover:bg-blue-100 hover:text-blue-800 cursor-pointer">
            <Bell size={18} />
          </div>
          <Account />
        </div>
      </header>
    </div>
  );
};

export default Header;
