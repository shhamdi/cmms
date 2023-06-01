"use client";

import { signIn, signOut } from "next-auth/react";

const Button = ({
  children,
  category = "primary",
  className,
  action,
  type,
  width,
}: {
  children: React.ReactNode;
  category?: "primary" | "secondary";
  className?: string;
  action?: any | string;
  type?: any;
  width?: string;
}) => {
  if (action === "signIn") action = signIn;
  if (action === "signOut") action = signOut;
  if (action === undefined) action = () => {};
  return (
    <button
      type={type}
      className={`flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-${width} ${className}`}
      onClick={() => action()}
    >
      {children}
    </button>
  );
};

export default Button;
