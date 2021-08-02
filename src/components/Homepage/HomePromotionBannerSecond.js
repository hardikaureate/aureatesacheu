import React from 'react'
import './homecss/homesecondbanner.css'

const HomePromotionBannerSecond = () => {
    return (
        <div>

          <div className="promoBanner">
              <div className="bannerImg">
                {
                  window.innerWidth > 767 ?
                  <img src="https://f.shgcdn.com/3225eda2-5406-4b77-8506-bef2b486e678/" />
                  :
                  <img src="https://f.shgcdn.com/71aecca4-a7d6-47fc-b199-2dfea57c9902/" />
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
