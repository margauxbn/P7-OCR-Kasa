import Banner from "../compenents/banner/Banner.tsx";
import Description from "../compenents/description/Description.tsx";
import "./about.scss"

function About() {
  
  return (
    <>
        <div className="about_banner">
            <Banner ImgUrl="/public/about_banner.jpg" BannerHome="" />
        </div>
        <div className="about_description">
            <Description TitleDescription="Fiabilité" ParagraphDescription="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
            <Description TitleDescription="Respect" ParagraphDescription="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Description TitleDescription="Service" ParagraphDescription="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Description TitleDescription="Sécurité" ParagraphDescription="La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
    </> 
  );
}

export default About