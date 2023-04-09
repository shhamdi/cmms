export default function ModuleHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="flex justify-between items-center w-full h-20">
      {children}
    </header>
  );
}
