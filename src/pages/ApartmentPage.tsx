import "./apartment-page.scss";
import ApartmentCarousel from "../compenents/apartmentCarousel/ApartmentCarousel";
import ApartmentTitle from "../compenents/apartmentTitle/ApartmentTitle";
import ApartmentReview from "../compenents/apartementReview/ApartmentReview";
import Description from "../compenents/description/Description";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ApartmentPage() {

  type Apartment = {
    id: string;
    cover: string;
    title: string;
    description: string;
    location: string;
    host: Host;
    equipments: string;
  };

    type Host = {
    name: string;
    picture: string;
  };

  const location = useLocation();
  const [flat, setFlat] = useState<Apartment | null>(null);

  useEffect(() => {
    fetchDataApartment();
  }, []);

  function fetchDataApartment() {
    fetch("/database.json")
      .then((res) => res.json())
      .then((apartments: Apartment[]) => {
        const filteredApartments = apartments.filter(apartment => apartment.id === location.state?.apartmentId);
        setFlat(filteredApartments[0] || null);
      })
      .catch(console.error);
  }

  if (!flat) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <ApartmentCarousel imageUrl={flat.cover} />
      <div className="apartment-body">
        <ApartmentTitle title={flat.title} location={flat.location}/>
        <ApartmentReview host={flat.host.name} picture={flat.host.picture}/>
      </div>
      <div className="apartment-description">
        <Description titleDescription="Description" paragraphDescription={flat.description}/>
        <Description titleDescription="Équipements" paragraphDescription={flat.equipments}/>
      </div>
    </>
  );
}

export default ApartmentPage;

