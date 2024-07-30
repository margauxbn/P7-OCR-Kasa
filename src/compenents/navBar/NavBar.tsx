import "./navBar.scss";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  
    return (
      <>
        <nav>
          
          <Link to="/" className="navbar_logo">
            <img src="../public/logo.jpg" alt="Logo Kasa"/>        
          </Link>

          <ul className="navbar_list">
            <NavLink to="/" className="list_accueil">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/about">
              <li>À propos</li>
            </NavLink>
          </ul>

        </nav>
      </> 
    );
  }

export default NavBar
