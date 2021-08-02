import React from 'react'
import './homecss/banner.css'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import bannerData from '../../sitedata.json'
console.log({bannerData})
const HomePromotionBannerThird = () => {

    const bdata = bannerData?.pdppagedata

    return (
        <>
      
          
            <div className="pamperYourself">
              <div className="Container">
                <h2 className="bannerText">
                PAMPER YOURSELF WITH OUR SILKY SWEET SET
                </h2>
                <span className="bannerDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, impedit?</span>

                <div className="bannerImg">
                {bdata && bdata.thirdBanner.map((data,i) => (
                  <div key={i}><img src={`/${data.images.src}`} alt="dsd"/></div>
                  ))
      }
                </div>

                <div className="bannerLink">
                  <a href="https://shopify.github.io/js-buy-sdk/">Shop Now</a>
                </div>
              </div>
            </div>
          
        
    </>
    )
}

export default HomePromotionBannerThird
