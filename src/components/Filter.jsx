export default function Filter({ categories, onFilter }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>Filter by Category: </label>
      <select onChange={(e) => onFilter(e.target.value)} style={{ padding: "0.3rem" }}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
