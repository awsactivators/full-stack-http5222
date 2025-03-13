import './footer.css';

export default function Footer() {
  return(
    <footer id="footer">
      <div className="footer-text">
        <p>&copy; Copyright HTTP5222, 2025.</p>
      </div>

      <div className="footer-socials">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
  );
}