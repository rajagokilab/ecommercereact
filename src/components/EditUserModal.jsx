import { useState, useEffect } from "react";

export default function EditUserModal({ user, onSave, onClose }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if (!user) return null;

  function handleSave() {
    onSave({ ...user, name, email });
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "white", padding: "1rem", borderRadius: "8px", width: "300px" }}>
        <h3>Edit User</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.4rem" }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.4rem" }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
          <button onClick={onClose} style={{ padding: "0.4rem 0.8rem" }}>
            Cancel
          </button>
          <button
            onClick={handleSave}
            style={{ padding: "0.4rem 0.8rem", background: "#2563eb", color: "white", border: "none" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
