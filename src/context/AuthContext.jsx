import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { role: "student" | "teacher", username }

  function login(username, password) {
    // simple role check
    if (username === "teacher" && password === "1234") {
      setUser({ role: "teacher", username });
    } else {
      setUser({ role: "student", username });
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
