import "./apartment-container.scss";
import ApartmentBox from "../apartmentBox/ApartmentCard"


function ApartmentContainer() {
  
    return (
      <>
        <div className="apartment_container">
            <ApartmentBox />
            <ApartmentBox />
            <ApartmentBox />
            <ApartmentBox />
            <ApartmentBox />
            <ApartmentBox />
        </div>
      </> 
    );
  }

export default ApartmentContainer