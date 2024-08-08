import "./apartment-card.scss";

function ApartmentCard(props:any) {
  
    return (
      <>
        <img src={props.imageCard}/>
        <h2 className="location_title">{props.title}</h2>
      </> 
    );
  }

export default ApartmentCard