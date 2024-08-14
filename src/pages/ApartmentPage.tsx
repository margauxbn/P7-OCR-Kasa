import "./apartment-page.scss";
import ApartmentCarousel from "../components/apartmentCarousel/ApartmentCarousel";
import ApartmentTitle from "../components/apartmentTitle/ApartmentTitle";
import ApartmentReview from "../components/apartementReview/ApartmentReview";
import Description from "../components/description/Description";
import { useParams } from "react-router-dom";
import locations from "../../database.json";
import React from "react";

interface Location {
  id: string;
  title: string;
  location: string;
  rating: string;
  host: {
    name: string;
    picture: string;
  };
  equipments: string[];
  description: string;
  pictures: string[];
  tags: string[];
}


export const ApartmentPage: React.FC = () => {
  const { locationId } = useParams<{locationId:string}>();
  const locationContent: Location | undefined = locations.find((location) => location.id === locationId);

  if (!locationContent) {
    window.location.replace("/error");
    return null;
  }

  const { title, location, rating, host, equipments, description, pictures, tags } = locationContent;

  return (
    <>
      <ApartmentCarousel pictures={pictures} />
      <div className="apartment-body">
        <ApartmentTitle title={title} location={location} tags={tags} />
        <ApartmentReview host={host.name} picture={host.picture} rating={rating} />
      </div>
      <div className="apartment-description">
        <Description titleDescription="Description" paragraphDescription={description} />
        <Description titleDescription="Équipements" paragraphDescription={
          <ul>
            {equipments.map((equipment) => 
              <li key={equipment}>
                {equipment}
              </li>
            )}
          </ul>
        } />
      </div>
    </>
  );
}

export default ApartmentPage;
