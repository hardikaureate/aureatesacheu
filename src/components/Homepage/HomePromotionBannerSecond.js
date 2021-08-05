import React from 'react'
import './homecss/homesecondbanner.css'

const HomePromotionBannerSecond = () => {
    return (
        <div>

          <div className="promoBanner">
              <div className="bannerImg">
                {
                  window.innerWidth > 767 ?
                  <img src="https://cdn.shopify.com/s/files/1/0582/4154/8474/files/Capture0039-Edit_no_cotton.jpg?v=1628146700" alt="sacheu"/>
                  :
                  <img src="https://cdn.shopify.com/s/files/1/0582/4154/8474/files/Group_214_1.jpg?v=1628146749" alt="sacheu"/>
                }
              </div>
              <div className="bannerInfo">
                <div className="Container">
                  <h2>Level up YOUR BEAUTY ROUTINE</h2>
                  <p>Our products are especially curated to make sure you are having your best skin moment! Experience the difference with our stainless steel products paired with the Thick Skin Essential Lipids Serum.</p>
                  <button className="bigButton">
                    Shop Now
                  </button>
                </div>
              </div>
          </div>
          
        </div>
    )
}

export default HomePromotionBannerSecond
