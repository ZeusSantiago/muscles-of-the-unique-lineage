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
  return (
    <>
      <AddWorkoutModal />
      <WorkoutList
        setCurrentWorkout={setCurrentWorkout}
        setHidden={setHidden}
      />
      <UpdateWorkoutModal
        workoutData={currentWorkout}
        hidden={hidden}
        setHidden={setHidden}
      />
    </>
  );
};

export default LandingPage;
