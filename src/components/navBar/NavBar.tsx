import "./navBar.scss";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  
    return (
      <>
        <nav>
          
          <Link to="/" className="navbar-logo">
            <img src="../public/logo.jpg" alt="Logo Kasa"/>        
          </Link>

          <div className="navbar-list">
            <NavLink to="/" className="list-accueil">
              Accueil
            </NavLink>
            <NavLink to="/about">
              À propos
            </NavLink>
          </div>

        </nav>
      </> 
    );
  }

export default NavBar
