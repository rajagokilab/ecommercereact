import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filter from "./components/Filter";

const productsData = [
  { id: 1, name: "Laptop", category: "Electronics", price: 800 },
  { id: 2, name: "Shoes", category: "Fashion", price: 50 },
  { id: 3, name: "Phone", category: "Electronics", price: 500 },
  { id: 4, name: "T-shirt", category: "Fashion", price: 20 },
  { id: 5, name: "Headphones", category: "Electronics", price: 100 },
];

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  const categories = [...new Set(productsData.map((p) => p.category))];

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function filterProducts(category) {
    if (!category) setProducts(productsData);
    else setProducts(productsData.filter((p) => p.category === category));
  }

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Product List</h1>
      <Filter categories={categories} onFilter={filterProducts} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}
