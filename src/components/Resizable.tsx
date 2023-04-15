"use client";

import { useState } from "react";

const Resizable = () => {
  return (
    <div className="relative h-full w-4 bg-white cursor-ew-resize group">
      <div className="absolute left-0 inset-y-0 w-[2px] bg-slate-200 group-hover:bg-blue-600"></div>
    </div>
  );
};

export default Resizable;
