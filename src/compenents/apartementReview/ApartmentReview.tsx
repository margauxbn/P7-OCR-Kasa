import "./apartment-review.scss";

function ApartmentReview(props: any) {

  return (
      <>
          <div className="apartment-review">
              <div className="host-profile">
                  <h3>{props.host}</h3>
                  <div className="host-picture">
                      <img src={props.picture} alt={`${props.host}'s picture`}/>
                  </div>
              </div>
              <div className="rating">
                  {[1, 2, 3, 4, 5].map((rate) => (
                     <i className={`fa-solid fa-star ${props.flat?.rating >= rate ? "full" : ""}`}></i>
                  ))} 
              </div>
          </div>
      </>
  );
}

export default ApartmentReview;