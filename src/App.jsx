import { useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import ExamPage from "./components/ExamPage";

function StudentView() {
  return <ExamPage />;
}

function TeacherView() {
  return (
    <div className="card">
      <h2>Teacher Dashboard</h2>
      <p>Here teacher can manage exams (feature expansion later).</p>
    </div>
  );
}

export default function App() {
  const { user, logout } = useAuth();

  if (!user) return <LoginForm />;

  return (
    <div className="container">
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Online Exam System</h1>
        <button className="btn" onClick={logout}>Logout</button>
      </header>

      {user.role === "teacher" ? <TeacherView /> : <StudentView />}
    </div>
  );
}
