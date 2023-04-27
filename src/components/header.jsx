import React from "react";
import { SiFirebase } from "react-icons/si";

const Header = () => {
  return (
    <header className="h-20 bg-slate-100 shadow-md shadow-slate-500/50 rounded-b-lg flex items-center justify-between px-8">
    <div className="flex items-center gap-2">
      <SiFirebase className="text-2xl text-amber-400" />
      <span className="text-xl font-semibold text-amber-400">
        FireShopping
      </span>
    </div>
    <button className="bg-amber-200 text-white py-1 px-3 rounded-full hover:bg-amber-700 transition shadow-md">
      Login
    </button>
  </header>
  );
};

export default Header;
