import styles from './header.module.css'
import {NavLink} from "react-router";

export default function Header() {
  return(
    <header id={styles['header']}>
      <div id={styles['header-container']}> 
          <h2 className={styles.sitename}>
            <a href="/">Trivia</a>
          </h2>

          <nav aria-label="Main navigation" id={styles['nav-container']}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
      </div>
    </header>
  );
}