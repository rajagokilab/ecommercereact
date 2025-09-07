import { useEffect, useState } from "react";
import { useCurrency } from "../context/CurrencyContext";

function formatCurrency(value, currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(value);
}

export default function CryptoTable() {
  const { currency } = useCurrency();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchPrices() {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=${currency}`
      );
      if (!res.ok) throw new Error("API Error");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchPrices(); // fetch once
    const interval = setInterval(fetchPrices, 10000); // refresh every 10s
    return () => clearInterval(interval); // cleanup
  }, [currency]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <table className="card" style={{ width: "100%", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th>Crypto</th>
          <th>Price ({currency.toUpperCase()})</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bitcoin (BTC)</td>
          <td>{formatCurrency(data.bitcoin[currency], currency)}</td>
        </tr>
        <tr>
          <td>Ethereum (ETH)</td>
          <td>{formatCurrency(data.ethereum[currency], currency)}</td>
        </tr>
        <tr>
          <td>Dogecoin (DOGE)</td>
          <td>{formatCurrency(data.dogecoin[currency], currency)}</td>
        </tr>
      </tbody>
    </table>
  );
}
