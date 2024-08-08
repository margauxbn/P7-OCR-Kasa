import "./banner.scss";

function Banner(props:any) {
  
    return (
      <>
        <div className="banner">
            <img src={props.imageUrl}/>
            <h1>{props.bannerHome}</h1>
        </div>
      </> 
    );
  }

export default Banner