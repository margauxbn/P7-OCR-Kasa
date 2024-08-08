import "./apartment-container.scss";
import ApartmentCard from "../apartmentCard/ApartmentCard"
import locations from "../../../database.json";
import { Link } from "react-router-dom";

function ApartmentContainer() {
  
    return (
      <>
        {locations.map((location) => {
          return (
            <article key={location.id} className="apartment_container">
              <Link key={location.id} to={`/appartement/${location.id}`} className="apartment">
                <ApartmentCard title={location.title} imageCard={location.cover}/>
              </Link>
            </article> 
          )
        })}
      </> 
    );
  }

export default ApartmentContainer