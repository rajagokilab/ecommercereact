import { useState } from "react";

export default function TodoItem({ task, toggleTask, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function handleUpdate(e) {
    e.preventDefault();
    if (!editText.trim()) return;
    updateTask(task.id, editText);
    setIsEditing(false);
  }

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
        padding: "0.5rem",
        border: "1px solid #ddd",
        borderRadius: "6px",
        background: "#f9fafb",
      }}
    >
      {isEditing ? (
        <form onSubmit={handleUpdate} style={{ flex: 1, marginRight: "0.5rem" }}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ width: "100%", padding: "0.3rem" }}
          />
        </form>
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            flex: 1,
          }}
        >
          {task.text}
        </span>
      )}

      <div>
        <button
          onClick={() => toggleTask(task.id)}
          style={{ marginRight: "0.5rem" }}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        {isEditing ? (
          <button onClick={handleUpdate} style={{ marginRight: "0.5rem" }}>
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{ marginRight: "0.5rem" }}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this task?")) {
              deleteTask(task.id);
            }
          }}
          style={{ background: "red", color: "white" }}
        >
          ❌
        </button>
      </div>
    </li>
  );
}
