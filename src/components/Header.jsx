import { useCurrency } from "../context/CurrencyContext";

export default function Header() {
  const { currency, setCurrency } = useCurrency();

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>Crypto Price Tracker</h1>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="input"
      >
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="gbp">GBP</option>
      </select>
    </header>
  );
}
