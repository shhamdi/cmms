import { Codesandbox } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center p-1 hover:bg-blue-200 cursor-pointer rounded-[3px]">
      <Codesandbox />
      <div className="font-bold ml-2">CMM SOFTWARE</div>
    </div>
  );
}
