import React, { useState, useEffect, useContext, createContext } from "react";
import { axiosPrivate } from "../api/axios.js";

const WorkoutContext = createContext(null);

export function useWorkoutContext() {
  const context = useContext(WorkoutContext);

  if (context === undefined) {
    throw new Error(
      "useWorkoutContext must be used within a useWorkoutContext"
    );
  }
  return context;
}

export default function WorkoutContextProvider({ children }) {
  const [workouts, setWorkouts] = useState([]);

  async function fetchWorkouts() {
    try {
      const response = await axiosPrivate.get("/api/workouts/");
      if (response.status === 200) {
        console.log("get workouts: ", response.data);
        setWorkouts(response.data);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  async function deleteWorkout(id) {
    try {
      const response = await axiosPrivate.delete("/api/workouts/" + id);
      if (response.status === 200) {
        console.log("delete workout: ", response.data);
        fetchWorkouts();
      }
    } catch (error) {
      console.log("hackdog error");
      console.log(error.response?.data);
    }
  }

  async function updateWorkout(workout) {
    try {
      const response = await axiosPrivate.put(
        "/api/workouts/" + workout._id,
        JSON.stringify({
          name: workout.name,
          muscleGroup: workout.muscleGroup,
          workoutType: workout.workoutType,
          intensity: workout.intensity,
        })
      );
      if (response.status === 200) {
        console.log("update workout: ", response.data);
        fetchWorkouts();
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  async function createWorkout(workout) {
    try {
      const response = axiosPrivate.post(
        "/api/workouts",
        JSON.stringify({
          name: workout.name,
          muscleGroup: workout.muscleGroup,
          workoutType: workout.workoutType,
          intensity: workout.intensity,
        })
      );
      console.log("create workout: ", response.data);
      fetchWorkouts();
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        fetchWorkouts,
        deleteWorkout,
        updateWorkout,
        createWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}
