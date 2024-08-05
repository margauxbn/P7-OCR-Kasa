import "./apartment-title.scss";

function ApartmentTitle(props:any) {

  return (
        <>
          <div className="apartment-title">
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
            <div className="tag">
              {/*
              {props.tags.map((tag, i) => (
                <p key={i}>{props.tag}</p>
              ))} */
              }
            </div>
          </div>
        </> 
      );
    }
    
export default ApartmentTitle