import RequestsList from "../components/RequestsList.jsx";
import RoutinesList from "../components/RoutinesList.jsx";
import WorkoutList from "../components/WorkoutList.jsx";
import { useState } from "react";

const LandingPage = () => {
  const [hidden, setHidden] = useState(true);

  const [currentWorkout, setCurrentWorkout] = useState({
    name: "",
    muscleGroup: "",
    workoutType: "",
    intensity: 1,
  });
  const [currentRoutine, setCurrentRoutine] = useState({
    name: "",
    intensity: 1,
  });

  const [routines, setRoutines] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const fetchData = () => {
    fetch("https://motul-backend.vercel.app/api/workouts/")
      .then((res) => res.json())
      .then((res) => {
        setWorkouts(res);
      });
    fetch("https://motul-backend.vercel.app/api/routines/")
      .then((res) => res.json())
      .then((res) => {
        setRoutines(res);
      });
  };
  return (
    <>
      <div className="">
        <RoutinesList
          setCurrentRoutine={setCurrentRoutine}
          setHidden={setHidden}
          routines={routines}
          fetchData={fetchData}
        />
      </div>
      <div className=" flex flex-col absolute right-12 top-24 ">
        <button>Create a Group</button>
        <button>Join a Group</button>
        <button className="mt-8">Request Workout</button>
      </div>
      <div className="mt-40">
        <WorkoutList
          setCurrentWorkout={setCurrentWorkout}
          setHidden={setHidden}
          workouts={workouts}
          fetchData={fetchData}
        />
      </div>
    </>
  );
};

export default LandingPage;
