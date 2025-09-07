import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="container">
      <Header />
      <ProductList />
      <Cart />
    </div>
  );
}
