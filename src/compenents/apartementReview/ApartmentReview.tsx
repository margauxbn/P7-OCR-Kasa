import "./apartment-review.scss";
import redStar from "../../assets/img/red-star.svg";
import greyStar from "../../assets/img/grey-star.svg"

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
                    <img src={props.picture} alt={`${props.host}'s picture`}/>
                </div>
            </div>
            <div className="rating">
            {/*<div className="rating">
      {stars.map((star) =>
        props.rating >= star ? (
          <img
            key={star.toString()}
            className="rating-icon"
            src={redStar}
            alt="Étoiles rouges"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating-icon"
            src={greyStar}
            alt="Étoiles grises"
          />
        )
      )}
    </div>
    */}
            </div>
        </div>
      </>
  );
}

export default ApartmentReview;