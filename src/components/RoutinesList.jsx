import { useEffect, useState } from "react";

const RoutinesList = () => {
  const routines = [];

  const handleUpdate = (routine) => {};
  const handleDelete = (id) => {};

  return (
    <div className="ml-5 m-5 flex flex-col p-2 border-2 border-black w-1/2 h-auto  rounded-lg bg-white">
      <div className="font-bold text-xl mb-2 text-center border-b-2 border-black bg-gray-500 rounded-lg shadow-xl">
        Routines:{" "}
      </div>
      {routines.length > 0 &&
        routines.map((routine, index) => {
          return (
            <div
              className="flex flex-row gap-2 mb-3 border-2 border-gray-400 bg-gray-300 font-semibold rounded-lg p-1"
              key={index}
            >
              <div className="flex-1 flex flex-row ">
                <div>
                  <span className="font-bold"> Name:</span> {routine.name}
                </div>
                <div>
                  <span className="font-bold"> Intensity: </span>
                  {routine.intensity}
                </div>
              </div>
              <button
                className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
                onClick={() => handleUpdate(routine)}
              >
                Update
              </button>
              <button
                className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
                onClick={() => handleDelete(routine._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default RoutinesList;
