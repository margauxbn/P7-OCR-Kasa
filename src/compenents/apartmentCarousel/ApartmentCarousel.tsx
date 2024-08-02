import "./apartment-carousel.scss";

function ApartmentCarousel(props:any) {

    return (
        <>
          <div className="apartment-carousel">
            <img src={props.imageUrl}/>
          </div>
        </> 
      );
    }
    
export default ApartmentCarousel