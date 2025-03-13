import { Link } from "react-router-dom";
import './header.css';

export default function Header() {
  return(
    <header id="header">
      <div className="logo-name">
        <div className="logo">
          <img src="/logo.png" className="logo" alt="bag logo" />
        </div>
        <div className="site-name">
          <h2 id="site-name">
            <Link to="/">Shop Bags</Link>
          </h2>
        </div>
      </div>
    </header>
  );
}