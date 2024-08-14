import { useState } from "react";
import "./collapse.scss";

function Collapse(props: any) {
  
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const showParagraph = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div className="collapse-block">

      <div className="collapse-title" onClick={showParagraph}>
        <h2>{props.titleCollapse}</h2>

        <i className={`fa-solid fa-chevron-down ${isParagraphVisible ? 'rotate' : ''}`}></i>
      </div>

      <div className={`collapse-paragraph ${isParagraphVisible ? 'show' : ''}`}>
          {props.paragraphCollapse}
      </div>
      
    </div>
  );
}

export default Collapse