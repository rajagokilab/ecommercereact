import { useState } from "react";

export default function TaskForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onSave(title, notes);
    setTitle("");
    setNotes("");
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <input
        className="input"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="input textarea"
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button className="btn primary">Add</button>
    </form>
  );
}
