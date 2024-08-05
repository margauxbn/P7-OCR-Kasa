import "./apartment-container.scss";
import ApartmentCard from "../apartmentCard/ApartmentCard"
import { useEffect, useState } from "react";


function ApartmentContainer() {
  
  type Apartment = {
    title: string;
    cover: string;
    id: string;
  }
  
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect (fetchAppartments, []);

  function fetchAppartments() {
    fetch("/database.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error);
  }

    return (
      <>
        <div className="apartment_container">
          {apartments.map((apartment, i) => (
            <ApartmentCard key={i} title={apartment.title} imageCard={apartment.cover} id={apartment.id}/>            
          ))}
        </div>
      </> 
    );
  }

export default ApartmentContainer