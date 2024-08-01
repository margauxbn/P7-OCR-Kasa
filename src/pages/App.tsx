import "../style.scss";
import Banner from "../compenents/banner/Banner.tsx";
import ApartmentContainer from "../compenents/apartmentContainer/ApartmentContainer.tsx";

function App() {
  
  return (
    <>
      <Banner ImgUrl="/public/banner_img.jpg" BannerHome="Chez vous, partout et ailleurs" />
      <ApartmentContainer />
    </> 
  );
}

export default App
