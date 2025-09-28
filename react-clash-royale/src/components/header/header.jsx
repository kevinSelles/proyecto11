import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Clash Royale</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/personajes">Personajes</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;