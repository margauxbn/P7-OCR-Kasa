import { useState } from "react";
import "./description.scss";

function Description(props: any) {
  
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const showParagraph = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div className="description-block">

      <div className="description_title" onClick={showParagraph}>
        <h2>{props.titleDescription}</h2>

        <i className={`fa-solid fa-chevron-down ${isParagraphVisible ? 'rotate' : ''}`}></i>
      </div>

      <div className={`description_paragraph ${isParagraphVisible ? 'show' : ''}`}>
        {props.paragraphDescription}
      </div>
      
    </div>
  );
}

export default Description