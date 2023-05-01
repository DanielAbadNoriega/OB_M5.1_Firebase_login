import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../App";

const Footer = () => {
  const { setRoute } = useContext(AppContext);

  return (
    <footer className="fixed h-16 w-full bg-slate-100 bottom-0 flex justify-evenly items-center">
      <div
        className="p-2 text-3xl rounded-full bg-amber-200 text-white shadow-inner cursor-pointer"
        onClick={() => setRoute("home")}
      >
        <AiFillHome />
      </div>
      <div
        className="p-2 text-3xl rounded-full bg-amber-200 text-white shadow-inner cursor-pointer"
        onClick={() => setRoute("shopping")}
      >
        <FaShoppingCart />
      </div>
    </footer>
  );
};

export default Footer;
