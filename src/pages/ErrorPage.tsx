import "./error-page.scss"
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function ErrorPage() {
  
    return (
      <>
        <NavBar />

        <div className="error-page">
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="link-to-home">
                <p>Retourner sur la page d’accueil</p>
            </Link>            
        </div>

        <Footer />
      </> 
    );
  }
  
  export default ErrorPage