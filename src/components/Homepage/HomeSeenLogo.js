import React, { useEffect, useState } from "react"
import homepageLogo from '../../sitedata.json'
import './homecss/homepageLogo.css'
import Skeleton from 'react-loading-skeleton'


//console.log({homepageLogo})
const HomeSeenLogo = ({ title }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
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
                {loading ? <Skeleton width={220} height={119} /> : <img src={`/${logo.images.src}`} alt="as-seen-logo" />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>

  )
}
export default HomeSeenLogo