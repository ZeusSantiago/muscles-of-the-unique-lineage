import RequestsList from "../components/RequestsList.jsx";
import RoutinesList from "../components/RoutinesList.jsx";
import WorkoutList from "../components/WorkoutList.jsx";
import { axiosPrivate } from "../api/axios.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="">
        <RoutinesList />
      </div>
      <div className="flex flex-col absolute right-12 top-24 items-center gap-2">
        <NavLink to="/group-page">
          <button>My Group</button>
        </NavLink>
        <NavLink to="/create-group">
          <button>Create a Group</button>
        </NavLink>
        <NavLink to="/join-group">
          <button>Join a Group</button>
        </NavLink>
        <button className="mt-8">Request Workout</button>
      </div>
      <div className="mt-40">
        <WorkoutList />
      </div>
    </>
  );
};

export default LandingPage;
