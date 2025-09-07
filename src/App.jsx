import Header from "./components/Header";
import CryptoTable from "./components/CryptoTable";
import { CurrencyProvider } from "./context/CurrencyContext";

export default function App() {
  return (
    <CurrencyProvider>
      <div className="container">
        <Header />
        <CryptoTable />
      </div>
    </CurrencyProvider>
  );
}
