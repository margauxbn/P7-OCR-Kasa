import "./apartment-page.scss";
import Gallery from "../components/gallery/Gallery";
import ApartmentTitle from "../components/apartmentTitle/ApartmentTitle";
import ApartmentReview from "../components/apartementReview/ApartmentReview";
import Collapse from "../components/collapse/Collapse";
import { useParams } from "react-router-dom";
import locations from "../../database.json";
import React from "react";

interface Location {
  id: string;
  title: string;
  location: string;
  rating: string;
  description: string;
  host: {
    name: string;
    picture: string;
  };
  equipments: string[];
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
      <Gallery pictures={pictures} />
      <div className="apartment-body">
        <ApartmentTitle title={title} location={location} tags={tags} />
        <ApartmentReview host={host.name} picture={host.picture} rating={rating} />
      </div>
      <div className="apartment-collapse">
        <Collapse titleCollapse="Description" paragraphCollapse={description} />
        <Collapse titleCollapse="Équipements" paragraphCollapse={
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
