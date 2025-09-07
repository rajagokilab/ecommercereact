import { useEffect } from "react";
import Header from "./components/Header";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import { PreferencesProvider } from "./context/PreferencesContext";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";

function FitnessApp() {
  const [workouts, setWorkouts] = useLocalStorage("fitness_workouts", []);
  const size = useWindowSize();

  function addWorkout(workout) {
    setWorkouts([workout, ...workouts]);
  }

  // Reminder every hour
  useEffect(() => {
    const interval = setInterval(() => {
      alert("⏰ Time to log your workout or take a short walk!");
    }, 60 * 60 * 1000); // 1 hour
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Header />
      <p>
        Screen size: {size.width}x{size.height} → Layout:{" "}
        {size.width < 600 ? "Mobile" : "Desktop"}
      </p>
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default function App() {
  return (
    <PreferencesProvider>
      <FitnessApp />
    </PreferencesProvider>
  );
}
