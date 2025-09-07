import useCart from "../hooks/useCart";
import { useAuth } from "../context/AuthContext";

export default function Cart() {
  const { cart, removeItem, clearCart } = useCart();
  const { user } = useAuth();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="card">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{item.title} (x{item.qty})</span>
          <button className="btn" onClick={() => removeItem(item.id)}>❌</button>
        </div>
      ))}
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
      {user ? (
        <button className="btn primary" onClick={clearCart}>Checkout</button>
      ) : (
        <p style={{ color: "red" }}>⚠️ Please log in to checkout</p>
      )}
    </div>
  );
}
