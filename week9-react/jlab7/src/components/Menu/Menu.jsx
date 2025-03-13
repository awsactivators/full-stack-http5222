import { Link } from "react-router-dom";
import './menu.css'

export default function Menu() {
  return (
    <nav className="menu-container">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}
