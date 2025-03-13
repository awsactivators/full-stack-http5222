import Product from "./../Product/Product";
import "./productlist.css";

const productArray = [
  { image: "/tote.jpg", title: "Tote Leather Bag", details: "Women Stylish Tote Bag" },
  { image: "/lv.jpg", title: "Louis Vuitton", details: "Lilac Twist Turn Lock Handbag" },
  { image: "/gucci.jpg", title: "Gucci", details: "Pu Leather Gucci Handbag" },
  { image: "/amal.jpeg", title: "Amal Handbag", details: "Stylish Amal Satchel Bag" },
  { image: "/chanel.jpg", title: "Chanel", details: "Classic Chanel Quilted Bag" },
  { image: "/prada.jpg", title: "Prada", details: "Luxurious Prada Tote" }
];

export default function ProductList() {
  return (
    <section className="product-grid">
      {productArray.map((p, index) => (
        <Product image={p.image} title={p.title} details={p.details} key={index} />
      ))}
    </section>
  );
}
