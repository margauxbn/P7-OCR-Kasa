import "./apartment-page.scss";
import ApartmentCarousel from "../compenents/apartmentCarousel/ApartmentCarousel";
import ApartmentTitle from "../compenents/apartmentTitle/ApartmentTitle";
import ApartmentReview from "../compenents/apartementReview/ApartmentReview";
import Description from "../compenents/description/Description";
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
        <Description titleDescription="Équipements" paragraphDescription={equipments.join(", ")} />
      </div>
    </>
  );
}

export default ApartmentPage;
