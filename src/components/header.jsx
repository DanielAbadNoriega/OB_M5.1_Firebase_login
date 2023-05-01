import React, { useContext } from "react";

import { SiFirebase } from "react-icons/si";
import { AppContext } from "../App";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

const Header = () => {
  const { setRoute, user, setUser } = useContext(AppContext);

  const userSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setRoute("login");
        setUser(null);
        localStorage.clear();
        toast.success(`Successfully signout!`);
      })
      .catch((error) => {
        // An error happened.
        console.error(`[ SIGNOUT ] Error: ${error.message}`, error);
      });
  };

  return (
    <header className="h-20 w-full bg-slate-100 shadow-md shadow-slate-500/50 rounded-b-lg flex items-center justify-between px-8 fixed top-0">
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
        {user ? (
          <button
            className="py-1 px-3 bg-red-500 text-white rounded-full hover:bg-red-700 transition shadow-md"
            onClick={userSignOut}
          >
            Logout
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
