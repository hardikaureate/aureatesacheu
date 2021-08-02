import { Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import firstBanner from '../../sitedata.json'
import './homecss/HomePromotionBannerFirst.css'


const bannerdata = firstBanner.pdppagedata
const bannerdatasec = firstBanner.pdppagedata
//console.log({ bannerdata })
const HomePromotionBannerFirst = () => {
    return (
        <div>
            <div className="FeatureBanner">
                <div className="Container">
                    <>
                        {bannerdata.PromotionFirstBanner.map((data) =>
                            <div key={data.bannerTitle}>
                                <div className="FeatureBannerOne">
                                    <div className="FeatureInfo">
                                        <h2 className="bannerTitle">
                                            {data.bannerTitle}
                                        </h2>
                                        <div className="bannerDesc">
                                            <p>{data.bannerDesc}</p>
                                            <p>{data.bannerDesc1}</p>
                                        </div>
                                        <div className="bannerLink">
                                            <p><Link to={data.bannerLink}>SHOP NOW</Link></p>
                                        </div>
                                    </div>
                                    <div className="FeatureImage" key={data.src}>
                                        <Image src={`/${data.images.src}`} />
                                    </div>

                                </div>
                            </div>
                        )}
                        {bannerdatasec.PromotionFirstSecBanner.map((data) =>
                        <div className="FeatureBannerTwo" key={data.src}>
                            <div className="FeatureImage">
                                <Image src={`/${data.images.src}`} />
                            </div>

                            <div className="FeatureInfo">
                                <h2 className="bannerTitle">
                                    {data.bannerTitle}
                                </h2>

                                <div className="bannerDesc">
                                    <p>{data.bannerDesc}</p>
                                    <p>{data.bannerDesc1}</p>
                                </div>

                                <div className="bannerLink">
                                    <p><Link to={data.bannerLink}>LEARN MORE</Link></p>
                                </div>
                            </div>
                        </div>
                        )}
                    </>
                </div>
            </div>
        </div>
    )
}

export default HomePromotionBannerFirst
