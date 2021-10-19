import { Image } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import firstBanner from '../../sitedata.json'
import './homecss/HomePromotionBannerFirst.css'
import Skeleton from 'react-loading-skeleton'

const bannerdata = firstBanner.pdppagedata
const bannerdatasec = firstBanner.pdppagedata
//console.log({ bannerdata })
const HomePromotionBannerFirst = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);
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
                                        {loading && <Skeleton height={630} />}
                                        {!loading && <Image src={`/${data.images.src}`} />}
                                    </div>

                                </div>
                            </div>
                        )}
                        {bannerdatasec.PromotionFirstSecBanner.map((data) =>
                            <div className="FeatureBannerTwo" key={data.src}>
                                <div className="FeatureImage">
                                    {loading && <Skeleton height={766} />}
                                    {!loading && <Image src={`/${data.images.src}`} />}
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