const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <button className="flex justify-between items-center px-4 py-[4px] bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-800">
        {children}
      </button>
    </div>
  );
};

export default Button;
