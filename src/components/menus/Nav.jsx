import { NavLink } from "react-router-dom";

function Nav() {
  const toggledropdown = () => {
    const dropdown = document.getElementById("dropdown");
    const hidden = dropdown.classList.contains("hidden");
    if (hidden) {
      dropdown.classList.remove("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
  };

  return (
    <div className=" bg-lc-#F9E5C4 rounded-3xl m-4 px-8 py-2 h-14 font-bold flex justify-between items-center shadow-lg">
      <div>
        <button>
          <NavLink to="/">MOTUL</NavLink>
        </button>
      </div>

      <div
        onClick={toggledropdown}
        className="w-auto px-2 border-2 border-gray-400 rounded-lg"
      >
        DropDown
      </div>
      <div
        id="dropdown"
        className="border-2 border-slate-600 rounded-lg hidden absolute"
      >
        <div className="w-auto border-2 shadow-inner px-2 hover:bg-slate-200 hover:cursor-pointer rounded-md">
          Account Info
        </div>
        <div className="w-auto border-2 shadow-inner px-2 hover:bg-slate-200 hover:cursor-pointer rounded-md">
          Edit Routine
        </div>
        <div className="w-auto border-2 shadow-inner px-2 hover:bg-slate-200 hover:cursor-pointer rounded-md">
          Settings
        </div>
        <div className="w-auto border-2 shadow-inner px-2 hover:bg-slate-200 hover:cursor-pointer rounded-md">
          Logout
        </div>
      </div>
      <div className="flex space-x-5">
        <div>
          <button>
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
        <div>D</div>
        <div />
        <div className="flex space-x-5"></div>
        <div>Login/Logout</div>
        <div>D</div>
      </div>
    </div>
  );
}

export default Nav;
