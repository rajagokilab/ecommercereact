import { useState } from "react";

export default function WorkoutForm({ onAdd }) {
  const [steps, setSteps] = useState("");
  const [calories, setCalories] = useState("");
  const [exercise, setExercise] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!steps && !calories && !exercise) return;
    onAdd({ steps, calories, exercise, date: new Date().toLocaleString() });
    setSteps("");
    setCalories("");
    setExercise("");
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Log Workout</h3>
      <input
        className="input"
        type="number"
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Calories burned"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <input
        className="input"
        placeholder="Exercise (e.g., Running)"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <button className="btn primary">Add Workout</button>
    </form>
  );
}
