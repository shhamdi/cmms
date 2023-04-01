import Account from "./Account";
import NavButton from "./NavButton";
import { Codesandbox } from "lucide-react";

const Header = () => {
  const navbar = ["Your Work", "Dashboards", "Teams"];

  return (
    <div className="fixed top-0 w-full z-10 bg-white border-b shadow-sm px-3 text-slate-800">
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
        <div>
          <Account />
        </div>
      </header>
    </div>
  );
};

export default Header;
