import { useState } from "react";

export default function TodoForm({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={text}
        placeholder="Enter a task"
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "0.5rem",
          padding: "0.5rem 1rem",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add
      </button>
    </form>
  );
}
