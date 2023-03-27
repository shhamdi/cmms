import Account from "./Account";

const Header = () => {
  return (
    <div className="h-14 border-b flex flex-row items-center justify-between">
      <div>CMMS</div>
      <div>Navbar</div>
      <Account />
    </div>
  );
};

export default Header;
