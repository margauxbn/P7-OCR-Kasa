import "./apartment-title.scss";

interface ApartmentTitleProps {
  title: string;
  location: string;
  tags: string[];
}

function ApartmentTitle(props:ApartmentTitleProps) {

  return (
        <>
          <div className="apartment-title">
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
            <div className="tag">
              {props.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))} 
            </div>
          </div>
        </> 
      );
    }
    
export default ApartmentTitle