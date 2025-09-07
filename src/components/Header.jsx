import { useAuth } from "../context/AuthContext";
import useCart from "../hooks/useCart";

export default function Header() {
  const { user, login, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="card" style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>ShopEasy 🛒</h1>
      <div>
        <span>Cart: {cart.reduce((sum, i) => sum + i.qty, 0)} items</span>
        {user ? (
          <>
            <span style={{ marginLeft: "1rem" }}>Hi, {user.username}</span>
            <button className="btn" onClick={logout} style={{ marginLeft: "0.5rem" }}>
              Logout
            </button>
          </>
        ) : (
          <button
            className="btn primary"
            style={{ marginLeft: "1rem" }}
            onClick={() => login("testuser", "123")}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
