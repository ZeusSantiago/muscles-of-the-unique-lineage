import RequestsList from "../components/RequestsList.jsx";
import RoutinesList from "../components/RoutinesList.jsx";
import WorkoutList from "../components/WorkoutList.jsx";
import { axiosPrivate } from "../api/axios.js";
import { useState } from "react";

const LandingPage = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="">
        <RoutinesList />
      </div>
      <div className=" flex flex-col absolute right-12 top-24 ">
        <button>Create a Group</button>
        <button>Join a Group</button>
        <button className="mt-8">Request Workout</button>
      </div>
      <div className="mt-40">
        <WorkoutList />
      </div>
    </>
  );
};

export default LandingPage;
