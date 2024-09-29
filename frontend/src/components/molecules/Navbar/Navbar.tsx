import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
