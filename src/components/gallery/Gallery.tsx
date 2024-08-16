import "./gallery.scss";
import { useState } from "react";

function Gallery(props:any) {

  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i:number) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const previousSlide = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);
  };

  const nextSlide = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  return (
      <>
        <div className="gallery">
          {pictures.map((picture:string, i:number) => 
            <img key={picture} src={picture} alt="" className={getClassName(i)}/>
          )}

          {pictures.length > 1 && (
          <>
            <button className="btn-previous" onClick={previousSlide}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="btn-next" onClick={nextSlide}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            <div className="slide-counter">
              {currentPicture + 1} / {pictures.length}
            </div> 
          </>
          )}
        </div>
      </> 
    );
  }
    
export default Gallery