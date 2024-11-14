import AddWorkoutModal from "../components/modals/AddWorkoutModal.jsx";
import UpdateWorkoutModal from "../components/modals/UpdateWorkoutModal.jsx";
import WorkoutList from "../components/WorkoutList.jsx";
import { useState } from "react";

const LandingPage = () => {
  const [currentWorkout, setCurrentWorkout] = useState({
    name: "",
    muscleGroup: "",
    workoutType: "",
    intensity: 2,
  });
  const [hidden, setHidden] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const fetchData = () => {
    fetch("https://motul-backend.vercel.app/api/workouts/")
      .then((res) => res.json())
      .then((res) => {
        setWorkouts(res);
      });
  };
  return (
    <>
      <div className="bg-red-700">
        <button>Add Routine</button>
      </div>
      <div>
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
