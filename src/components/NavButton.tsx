import { ChevronDown } from "lucide-react";
export default function NavButton({ name }: { name: string }) {
  return (
    <div className="flex items-center p-1 cursor-pointer hover:bg-blue-100 hover:text-blue-800 rounded-[3px] mx-1">
      <div>{name}</div>
      <ChevronDown size={12} className="ml-[2px] mt-[2px]" />
    </div>
  );
}
