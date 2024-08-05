import "./apartment-review.scss";

function ApartmentReview(props: any) {

    const [firstName, lastName] = props.host.split(" ");

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
                {[1, 2, 3, 4, 5].map((rate, i) => (
                   <i key={i} className={`fa-solid fa-star ${props.flat?.rating >= rate ? "full" : ""}`}></i>
                ))} 
            </div>
        </div>
      </>
  );
}

export default ApartmentReview;