"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "./Button";
import { X } from "lucide-react";
import { Plus } from "lucide-react";

const AddElement = ({
  triggerName,
  title,
  description,
  labels,
}: {
  triggerName: string;
  title: string;
  description: string;
  labels: React.ReactNode;
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Plus size={18} className="mr-1" />
          {triggerName}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-600/[.6] data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-30 top-[50%] left-[50%] h-[80vh] w-[80vw] overflow-y-auto translate-x-[-50%] translate-y-[-50%] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="sticky top-0 right-0 m-0 text-2xl font-bold">
            <div className="flex items-center justify-between bg-slate-100 h-20 p-6 shadow-md">
              <div>{title}</div>
              <Dialog.Close asChild>
                <button
                  className="inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <X />
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Title>
          <div className="p-6">
            <Dialog.Description className="text-slate-400 mt-[10px] mb-5 text-[15px] leading-normal">
              {description}
            </Dialog.Description>
            {labels}
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <Button category="primary">Save Changes</Button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddElement;
