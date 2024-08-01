import "./banner.scss";

function Banner(props:any) {
  
    return (
      <>
        <div className="banner">
            <img src={props.ImgUrl}/>
            <h1>{props.BannerHome}</h1>
        </div>
      </> 
    );
  }

export default Banner