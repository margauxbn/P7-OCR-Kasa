import "./apartment-review.scss";
import redStar from "../../assets/red-star.jpg";
import greyStar from "../../assets/grey-star.jpg";

function ApartmentReview(props: any) {

    const [firstName, lastName] = props.host.split(" ");
    const stars = [1, 2, 3, 4, 5];

  return (
      <>
        <div className="apartment-review">
            <div className="host-profile">
                <h3>
                  <span>{firstName}</span>
                  <span>{lastName}</span>
                </h3>
                <div className="host-picture">
                    <img src={props.picture} alt={`Photo de profil de ${props.host}`}/>
                </div>
            </div>
            <div className="rating">
            
              {stars.map((star) =>
                props.rating >= star ? (
                  <img
                    key={star.toString()}
                    className="rating-icon"
                    src={redStar}
                    alt="Étoile rouge"
                  />        
              ) : (
                <img
                  key={star.toString()}
                  className="rating-icon"
                  src={greyStar}
                  alt="Étoile grise"
                />
              )
              )}
            </div>
   
        </div>
        
      </>
  );
}

export default ApartmentReview;