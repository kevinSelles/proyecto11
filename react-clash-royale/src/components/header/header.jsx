import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Clash Royale</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/personajes" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Personajes
            </NavLink>
          </li>
          <li>
            <NavLink to="/informacion" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Información
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;