import "./apartment-box.scss";
import { Link } from "react-router-dom";

function ApartmentBox() {
  
    return (
      <>
      <Link to ="/location" className="apartment">
        <h2 className="location_title">Titre de la location</h2>
      </Link>
      </> 
    );
  }

export default ApartmentBox