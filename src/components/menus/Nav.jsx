import React from "react";
import { NavLink, Routes } from "react-router-dom";

function Nav() {
  return (
    <div className=" bg-lc-#F9E5C4 rounded-3xl m-4 px-8 py-2 h-14 font-bold flex justify-between items-center shadow-lg">
      <div>
        <button>
          <NavLink to="/home">MOTUL</NavLink>
        </button>
      </div>
      <div className="flex space-x-5">
        <div>
          <button>
            <NavLink to="/">Login</NavLink>
          </button>
        </div>
        <div>D</div>
      </div>
    </div>
  );
}

export default Nav;
