export default function WorkoutList({ workouts }) {
  if (workouts.length === 0) return <p>No workouts logged yet.</p>;

  return (
    <div>
      {workouts.map((w, i) => (
        <div key={i} className="card">
          <strong>{w.exercise || "General Workout"}</strong>
          <p>Steps: {w.steps || 0}</p>
          <p>Calories: {w.calories || 0}</p>
          <small>{w.date}</small>
        </div>
      ))}
    </div>
  );
}
