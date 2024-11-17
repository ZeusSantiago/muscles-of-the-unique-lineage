import { useEffect, useState } from "react";
import { axiosPrivate } from "../api/axios";
import { useWorkoutContext } from "../contexts/WorkoutContextProvider";

const WorkoutList = () => {
  const { workouts, fetchWorkouts, deleteWorkout } = useWorkoutContext();

  const handleUpdate = (workout) => {};

  const handleDelete = (id) => {
    deleteWorkout(id);
  };

  const refresh = () => {
    fetchWorkouts();
  };

  useEffect(() => {
    if (workouts.length == 0) {
      fetchWorkouts();
    }
  }, []);

  return (
    <div className="ml-5 m-5 flex flex-col p-2 border-2 border-black w-1/2 h-auto  rounded-lg bg-white">
      <div className="font-bold text-xl mb-2 text-center border-b-2 border-black bg-gray-500 rounded-lg shadow-xl">
        Workouts:
      </div>
      {workouts.length > 0 &&
        workouts.map((workout, index) => {
          return (
            <div
              className="flex flex-row gap-2 mb-3 border-2 border-gray-400 bg-gray-300 font-semibold rounded-lg p-1"
              key={index}
            >
              <div className="flex-1 flex flex-row ">
                <div>
                  <span className="font-bold"> Name:</span> {workout.name}
                </div>
                <div>
                  <span className="font-bold"> Muscle Group: </span>
                  {workout.muscleGroup}
                </div>
                <div>
                  <span className="font-bold"> Type: </span>
                  {workout.workoutType}
                </div>
                <div>
                  <span className="font-bold"> Intensity: </span>
                  {workout.intensity}
                </div>
              </div>
              <button
                className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
                onClick={() => handleUpdate(workout)}
              >
                Update
              </button>
              <button
                className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
                onClick={() => handleDelete(workout._id)}
              >
                Delete
              </button>
            </div>
          );
        })}

      <button className="bg-blue-200" onClick={refresh}>
        REFRESH
      </button>
    </div>
  );
};

export default WorkoutList;
