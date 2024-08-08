import "./apartment-container.scss";
import ApartmentCard from "../apartmentCard/ApartmentCard"
import locations from "../../../database.json";
import { Link } from "react-router-dom";

function ApartmentContainer() {
  return (
      <div className="apartment_container">
          {locations.map((location) => {
              return (
                  <article key={location.id}>
                      <Link to={`/appartement/${location.id}`}>
                          <ApartmentCard title={location.title} imageCard={location.cover} className="apartment_link" />
                      </Link>
                  </article>
              );
          })}
      </div>
  );
}

export default ApartmentContainer;