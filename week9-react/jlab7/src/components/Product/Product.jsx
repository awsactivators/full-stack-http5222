import "./Product.css";

export default function Product({ image, title, details }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{details}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}