import "./apartment-card.scss";

function ApartmentCard(props: any) {
  return (
      <div className="apartment">
          <img src={props.imageCard} alt={props.title} />
          <h2 className="location-title">{props.title}</h2>
      </div>
  );
}

export default ApartmentCard; 