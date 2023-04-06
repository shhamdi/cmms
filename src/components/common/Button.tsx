"use client";

const Button = ({
  children,
  category,
}: {
  children: React.ReactNode;
  category: "primary" | "secondary";
}) => {
  return (
    <div
      className={`inline-block px-4 py-[4px] min-w-[8rem] ${
        category === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-800"
          : "bg-gray-200 text-slate-800 hover:bg-gray-400"
      } font-semibold rounded-sm  cursor-pointer`}
    >
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
};

export default Button;
