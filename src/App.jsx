import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  function addTask(text) {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function updateTask(id, newText) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1>Todo List ✅</h1>
      <TodoForm addTask={addTask} />

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TodoList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}
