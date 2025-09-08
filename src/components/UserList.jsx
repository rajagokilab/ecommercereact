export default function UserList({ users, onEdit, onDelete }) {
  if (!users.length) return <p>No users available. Add one!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            marginBottom: "0.5rem",
            padding: "0.5rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: "#f9fafb",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong>{user.name}</strong> <br />
            <small>{user.email}</small>
          </div>
          <div>
            <button
              onClick={() => onEdit(user)}
              style={{ marginRight: "0.5rem", padding: "0.3rem 0.6rem" }}
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => {
                if (window.confirm("Are you sure you want to delete this user?")) {
                  onDelete(user.id);
                }
              }}
              style={{ padding: "0.3rem 0.6rem", background: "red", color: "white", border: "none" }}
            >
              ❌ Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
