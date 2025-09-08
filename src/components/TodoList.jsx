import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return; // prevent empty tasks
    setTasks([...tasks, task]);
    setTask("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Dynamic Todo List</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ width: "70%", padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            marginLeft: "0.5rem",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              background: "#f9fafb",
            }}
          >
            {t}
            <button
              onClick={() => removeTask(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "0.3rem 0.6rem",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
