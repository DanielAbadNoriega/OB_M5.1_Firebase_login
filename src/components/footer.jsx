import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { AppContext } from "../App";

const Footer = () => {
  const { setRoute } = useContext(AppContext);

  return (
    <footer className="fixed h-16 w-full bg-slate-100 bottom-0 flex justify-evenly items-center">
      <div
        className="p-2 text-3xl rounded-full bg-amber-200 text-white shadow-md cursor-pointer hover:bg-amber-500 transition"
        onClick={() => setRoute("home")}
      >
        <AiFillHome />
      </div>
      <div
        className="p-2 text-3xl rounded-full bg-amber-200 text-white shadow-md cursor-pointer hover:bg-amber-500 transition"
        onClick={() => setRoute("shopping")}
      >
        <FaShoppingCart />
      </div>
      <div
        className="p-2 text-3xl rounded-full bg-amber-200 text-white shadow-md cursor-pointer hover:bg-amber-500 transition"
        onClick={() => setRoute("tasklist")}
      >
        <BsListCheck />
      </div>
    </footer>
  );
};

export default Footer;
