import NavLink from "./NavLink";

const SideNavbar = () => {
  const navLinks = [
    {
      name: "Work Orders",
      route_segment: "work-orders",
      icon: "fileTrayFullOutline",
      notif: 0,
    },
    {
      name: "Preventive Maintenance",
      route_segment: "preventive-maintenance",
      icon: "shieldCheckmarkOutline",
      notif: 1,
    },
    {
      name: "Locations",
      route_segment: "locations",
      icon: "locationOutline",
      notif: 0,
    },
    {
      name: "Assets",
      route_segment: "asset",
      icon: "constructOutline",
      notif: 23,
    },
    {
      name: "Inventory",
      route_segment: "inventory",
      icon: "extensionPuzzleOutline",
      notif: 8,
    },
  ];

  return (
    <div className="flex flex-col p-4 border-r border-solid h-screen w-80">
      {navLinks.map((link, index) => (
        <NavLink {...link} key={index} />
      ))}
    </div>
  );
};

export default SideNavbar;
