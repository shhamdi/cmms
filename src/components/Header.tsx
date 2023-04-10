import Account from "./Account";
import HeaderDropDown from "./HeaderDropDown";
import NavButton from "./NavButton";
import { Codesandbox, Bell } from "lucide-react";
import Logo from "./common/Logo";

const Header = () => {
  const navbar = [
    [["Your Work"], ["Assign to me", "Recent"]],
    [
      ["Dashboards"],
      ["Default dashboard", "View all dashboards", "Create dashboard"],
    ],
    [["Teams"], ["Invite people", "Create a team", "Search people and teams"]],
  ];

  return (
    <div className="fixed top-0 w-full z-10 bg-white border-b shadow-sm px-3 text-slate-700">
      <header className="flex items-center justify-between h-14">
        <nav className="flex items-center h-full">
          <Logo />
          <div className="w-20"></div>
          <div className="flex items-center">
            {navbar.map((list, index) => (
              <HeaderDropDown list={list[1]} key={index}>
                <NavButton name={list[0][0]} />
              </HeaderDropDown>
            ))}
          </div>
        </nav>
        <div className="flex items-center">
          <div className="mx-4 p-2 rounded-full hover:bg-blue-200 hover:text-blue-800 cursor-pointer">
            <Bell size={18} />
          </div>
          <Account />
        </div>
      </header>
    </div>
  );
};

export default Header;
