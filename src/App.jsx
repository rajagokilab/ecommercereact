import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import EditUserModal from "./components/EditUserModal";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch initial users from API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data.slice(0, 5)); // just take first 5 users for demo
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    }
    fetchUsers();
  }, []);

  function addUser(user) {
    setUsers([user, ...users]);
  }

  function deleteUser(id) {
    setUsers(users.filter((u) => u.id !== id));
  }

  function saveUser(updatedUser) {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1>User Management System</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onSave={saveUser}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
}
