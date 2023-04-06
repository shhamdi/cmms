"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "./Button";
import { X } from "lucide-react";

const AddElement = ({
  children,
  title,
  description,
  labels,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  labels: React.ReactNode;
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Create Part</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-30 top-[50%] left-[50%] h-[30rem] w-[50rem] overflow-y-auto translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 text-[17px] font-bold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-slate-400 mt-[10px] mb-5 text-[15px] leading-normal">
            {description}
          </Dialog.Description>
          {labels}
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Button>Save Changes</Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddElement;