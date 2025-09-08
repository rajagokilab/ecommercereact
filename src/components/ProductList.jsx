export default function ProductList({ products, addToCart }) {
  if (!products.length) return <p>No products found.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "6px" }}
        >
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            style={{ padding: "0.3rem 0.6rem", background: "#2563eb", color: "white", border: "none" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
