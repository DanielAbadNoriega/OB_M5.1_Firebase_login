import React, { useContext } from "react";

import { SiFirebase } from "react-icons/si";
import { AppContext } from "../App";

const Header = () => {
  const { setRoute } = useContext(AppContext);

  return (
    <header className="h-20 bg-slate-100 shadow-md shadow-slate-500/50 rounded-b-lg flex items-center justify-between px-8">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setRoute("home")}
      >
        <SiFirebase className="text-2xl text-amber-500" />
        <span className="text-xl font-semibold text-amber-400">
          FireShopping
        </span>
      </div>
      <div>
        <button
          className="mr-5 bg-amber-200 text-white py-1 px-3 rounded-full hover:bg-amber-700 transition shadow-md"
          onClick={() => setRoute("login")}
        >
          Login
        </button>
        <button
          className="bg-amber-300 text-white py-1 px-3 rounded-full hover:bg-amber-800 transition shadow-md"
          onClick={() => setRoute("register")}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
