import { useRef, useState } from "react";

const AddWorkoutModal = () => {
  const formRef = useRef(null);
  const [workoutDetails, setWorkoutDetails] = useState({
    name: "",
    muscleGroup: "",
    workoutType: "",
    intensity: 2,
  });

  const handleChange = (e) => {
    setWorkoutDetails({ ...workoutDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3500/api/workouts/`, {
      method: "POST",
      body: JSON.stringify({ ...workoutDetails }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[375px] flex flex-col justify-center items-center border-2 rounded-xl mt-32 px-4"
      >
        <div className="grid grid-cols-2 gap-2 py-2 ">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="input"
            placeholder="John"
            required
            value={workoutDetails.name}
            onChange={handleChange}
          />
          <label className="label" htmlFor="muscleGroup">
            Muscle Group
          </label>
          <input
            type="text"
            name="muscleGroup"
            className="input"
            placeholder="Chest"
            value={workoutDetails.muscleGroup}
            onChange={handleChange}
          />
          <label className="label" htmlFor="workoutType">
            Workout Type
          </label>
          <input
            type="text"
            name="workoutType"
            className="input"
            placeholder="workoutType"
            value={workoutDetails.workoutType}
            onChange={handleChange}
          />
          <label className="label" htmlFor="intensity">
            Intensity
          </label>
          <select
            className="input w-14"
            name="intensity"
            value={workoutDetails.intensity}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 py-0.5 px-1 mb-1 hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddWorkoutModal;
