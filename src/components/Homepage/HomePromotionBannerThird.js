import React, { useState, useEffect } from 'react'
import './homecss/banner.css'
//import { Image } from '@chakra-ui/react'
//import { Link } from 'react-router-dom'
import bannerData from '../../sitedata.json'
import Skeleton from 'react-loading-skeleton'

//console.log({ bannerData })
const HomePromotionBannerThird = () => {

  const [loading, setLoading] = useState(true);
  const bdata = bannerData?.pdppagedata

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <div className="pamperYourself">
        <div className="Container">
          <h2 className="bannerText">
            PAMPER YOURSELF WITH OUR SILKY SWEET SET
          </h2>
          <span className="bannerDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, impedit?</span>

          <div className="bannerImg">
            {bdata && bdata.thirdBanner.map((data, i) => (
              <div key={i}>
                {loading && <Skeleton height={660} />}
                {!loading && <img src={`/${data.images.src}`} alt="dsd" />}
              </div>
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