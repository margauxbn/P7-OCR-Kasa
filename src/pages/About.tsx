import Banner from "../compenents/banner/Banner.tsx";
import Description from "../compenents/description/Description.tsx";
import "./about.scss"

function About() {
  
  return (
    <>
        <div className="about_banner">
            <Banner />
        </div>
        <div className="about_description">
            <Description />
            <Description />
            <Description />
            <Description />
        </div>
    </> 
  );
}

export default About