import ProductList from "../components/ProductList/ProductList";
import '../styles/styles.css';

export default function Home() {
  return (
    <main>
      <h1 className="home-title">Available Products</h1>
      <ProductList />
    </main>
  );
}