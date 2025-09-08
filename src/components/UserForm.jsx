import { useState } from "react";

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    addUser({ id: Date.now(), name, email });
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.4rem" }}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.4rem" }}
      />
      <button
        type="submit"
        style={{ padding: "0.4rem 1rem", background: "#2563eb", color: "white", border: "none" }}
      >
        Add User
      </button>
    </form>
  );
}
