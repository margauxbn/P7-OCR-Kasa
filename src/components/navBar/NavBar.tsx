import "./navBar.scss";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  
    return (
      <>
        <nav>
          
          <Link to="/" className="navbar_logo">
            <img src="../public/logo.jpg" alt="Logo Kasa"/>        
          </Link>

          <div className="navbar_list">
            <NavLink to="/" className="list_accueil">
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
