import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function TaskApp() {
  const [tasks, setTasks] = useLocalStorage("tm_tasks", []);
  const [lastSaved, setLastSaved] = useState(null);

  useEffect(() => {
    setLastSaved(new Date().toLocaleTimeString());
  }, [tasks]);

  function addTask(title, notes) {
    const newTask = {
      id: Date.now().toString(),
      title,
      notes,
      elapsed: 0,
      running: false,
    };
    setTasks([newTask, ...tasks]);
  }

  function updateTask(id, updates) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function tick(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, elapsed: t.elapsed + 1 } : t))
    );
  }

  return (
    <div className="container">
      <Header />
      <TaskForm onSave={addTask} />

      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          tasks.map((t) => (
            <TaskItem
              key={t.id}
              task={t}
              onUpdate={updateTask}
              onDelete={deleteTask}
              tick={tick}
            />
          ))
        )}
      </div>
      <footer>Last saved: {lastSaved ?? "—"}</footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TaskApp />
    </ThemeProvider>
  );
}
