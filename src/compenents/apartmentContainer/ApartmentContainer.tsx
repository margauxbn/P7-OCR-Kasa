import "./apartment-container.scss";
import ApartmentCard from "../apartmentCard/ApartmentCard"
import { useEffect, useState } from "react";


function ApartmentContainer() {
  
  type apartment = {
    title: string;
    cover: string;
  }
  
  const [apartments, setApartments] = useState<apartment[]>([]);

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
          {apartments.map((apartment) => (
            <ApartmentCard title={apartment.title} imageCard={apartment.cover}/>            
          ))}
        </div>
      </> 
    );
  }

export default ApartmentContainer