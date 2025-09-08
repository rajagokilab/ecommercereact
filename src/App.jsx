import { useEffect, useState } from "react";
import Header from "./components/Header";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });

  const { theme } = useTheme();

  // Save posts in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // Update document title dynamically
  useEffect(() => {
    if (posts.length) {
      document.title = posts[posts.length - 1].title;
    } else {
      document.title = "My Blog";
    }
  }, [posts]);

  function addPost(post) {
    setPosts([post, ...posts]);
  }

  return (
    <div style={{ background: theme === "light" ? "#f9fafb" : "#1f2937", minHeight: "100vh", color: theme === "light" ? "black" : "white" }}>
      <Header />
      <main style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
        <BlogForm addPost={addPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
}
