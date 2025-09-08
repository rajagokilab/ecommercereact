export default function BlogList({ posts }) {
  if (!posts.length) {
    return <p>No posts yet. Start writing! ✍️</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: "white",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
