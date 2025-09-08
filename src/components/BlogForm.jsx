import { useState } from "react";

export default function BlogForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addPost({ id: Date.now(), title, content });
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      <button
        type="submit"
        style={{ padding: "0.5rem 1rem", background: "#2563eb", color: "white", border: "none" }}
      >
        Add Post
      </button>
    </form>
  );
}
