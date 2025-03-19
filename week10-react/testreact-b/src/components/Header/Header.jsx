//import './header.css';
import styles from './header.module.css'
import {NavLink} from "react-router";

export default function Header() {
  return(
    <header id={styles['header']}>
      <h2 className={styles.sitename}>
        <a href="/">Random site name</a>
      </h2>
      <nav aria-label="Main navigation">
        <ul>
          <li>
            <NavLink 
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "special" : ""
              }
            >Home</NavLink>
          </li>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}