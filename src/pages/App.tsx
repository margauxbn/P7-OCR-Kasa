import "../style.scss";
import Banner from "../compenents/banner/Banner.tsx";
import ApartmentContainer from "../compenents/apartmentContainer/ApartmentContainer.tsx";

function App() {
  
  return (
    <>
      <Banner imageUrl="/public/banner_img.jpg" bannerHome="Chez vous, partout et ailleurs" />
      <ApartmentContainer />
    </> 
  );
}

export default App
