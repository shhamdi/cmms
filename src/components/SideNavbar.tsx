import NavLink from "./NavLink";

const SideNavbar = () => {
  const navLinks = [
    {
      name: "Work Orders",
      route_segment: "work-orders",
      icon: "fileTrayFullOutline",
    },
    {
      name: "Preventive Maintenance",
      route_segment: "preventive-maintenance",
      icon: "shieldCheckmarkOutline",
    },
    { name: "Locations", route_segment: "locations", icon: "locationOutline" },
    { name: "Assets", route_segment: "asset", icon: "constructOutline" },
    {
      name: "Inventory",
      route_segment: "inventory",
      icon: "extensionPuzzleOutline",
    },
  ];

  return (
    <div className="flex flex-col p-4 border-r border-solid h-screen">
      {navLinks.map((link, index) => (
        <NavLink {...link} key={index} />
      ))}
    </div>
  );
};

export default SideNavbar;
