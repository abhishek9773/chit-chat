import React from "react";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <header>
      <div className="container p-4 marker: flex justify-between items-center">
        <div className="text-2xl font-bold">
          chit<span className="text-red-500 text-3xl">/ </span>chat
        </div>
        <div className="flex items-center gap-8">
          <IoNotifications
            size={25}
            className="hover:text-yellow-200 hover:scale-1  "
          />
          <button className="bg-slate-400 rounded px-4 py-2 text-white hover:bg-slate-300 transition-transform">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
