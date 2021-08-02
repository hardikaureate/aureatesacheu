import React from "react";
import homepageLogo from '../../sitedata.json'
import './homecss/homepageLogo.css'
//console.log({homepageLogo})
const HomeSeenLogo = ({title}) => {
  return (
      <React.Fragment>
        <div className="featured_in_main">
          <div className="Container">
            <div className="asSeenText">
              <h1>{title}</h1>
            </div>
            <div className="logoContainer">
              {homepageLogo.pdppagedata.homeLogo && homepageLogo.pdppagedata.homeLogo.map((logo, i) => (
                  <span className="logoItem" key={i}>
                    <img src={`/${logo.images.src}`} alt="as-seen-logo" />
                  </span>
                ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    
  );
};

export default HomeSeenLogo;
