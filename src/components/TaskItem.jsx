import { useEffect, useState } from "react";

function formatElapsed(seconds) {
  const s = seconds % 60;
  const m = Math.floor((seconds / 60) % 60);
  const h = Math.floor(seconds / 3600);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default function TaskItem({ task, onUpdate, onDelete, tick }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [notes, setNotes] = useState(task.notes);

  useEffect(() => {
    let timer;
    if (task.running) {
      timer = setInterval(() => tick(task.id), 1000);
    }
    return () => clearInterval(timer);
  }, [task.running]);

  function saveEdits() {
    onUpdate(task.id, { title, notes });
    setEditing(false);
  }

  return (
    <div className="task card">
      {editing ? (
        <div>
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className="input textarea" value={notes} onChange={(e) => setNotes(e.target.value)} />
          <button className="btn" onClick={saveEdits}>Save</button>
        </div>
      ) : (
        <div>
          <strong>{task.title}</strong>
          <p>{task.notes}</p>
        </div>
      )}

      <div>
        <span className="timer">{formatElapsed(task.elapsed)}</span>
        <button className="btn" onClick={() => onUpdate(task.id, { running: !task.running })}>
          {task.running ? "Pause" : "Start"}
        </button>
        <button className="btn danger" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
