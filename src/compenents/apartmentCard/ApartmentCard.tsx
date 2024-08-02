import "./apartment-card.scss";
import { Link } from "react-router-dom";

function ApartmentCard(props:any) {
  
  const state = {
    apartmentId: props.id
  }
  
    return (
      <>
      <Link to ="/appartement" state={state} className="apartment">
        <img src={props.imageCard}/>
        <h2 className="location_title">{props.title}</h2>
      </Link>
      </> 
    );
  }

export default ApartmentCard