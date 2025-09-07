import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=6");
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchProducts();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!products.length) return <p>Loading products...</p>;

  return (
    <div className="grid">
      {products.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <button className="btn primary" onClick={() => addItem(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
