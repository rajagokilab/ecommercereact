export default function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "6px" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}
