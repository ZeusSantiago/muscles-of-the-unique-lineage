import { useEffect, useState } from "react";

const GroupsList = ({ setCurrentGroup, setHidden, groups, fetchData }) => {
  const handleUpdate = (routine) => {
    setHidden(false);
    setCurrentGroup(routine);
  };

  const handleDelete = (id) => {
    fetch("https://motul-backend.vercel.app/api/groups/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => fetchData());
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(`groups: ${groups}`);
  }, [groups]);

  return (
    <div className="ml-5 m-5 flex flex-col p-2 border-2 border-black w-1/2 h-auto  rounded-lg bg-white">
      <div className="font-bold text-xl mb-2 text-center border-b-2 border-black bg-gray-500 rounded-lg shadow-xl">
        Groups:{" "}
      </div>
      {groups.length > 0 &&
        groups.map((group, index) => {
          return (
            <div
              className="flex flex-row gap-2 mb-3 border-2 border-gray-400 bg-gray-300 font-semibold rounded-lg p-1"
              key={index}
            >
              <div className="flex-1 flex flex-row ">
                <div>
                  <span className="font-bold"> Name:</span> {group.name}
                </div>
                <div>
                  <span className="font-bold"> Intensity: </span>
                  {group.intensity}
                </div>
              </div>
              <button
                className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
                onClick={() => handleUpdate(group)}
              >
                Update
              </button>
              <button
                className="rounded-lg border-gray-900 bg-red-200 border-2 mr-3"
                onClick={() => handleDelete(group._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default GroupsList;
