import React, { Fragment } from 'react';
import Slider from 'react-slick';
import homeslider from '../../sitedata.json'
import './homecss/homeslider.css'

const homeslide = homeslider.pdppagedata
//console.log({ homeslider })
const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    arrows: false
                }
            }
        ]
    };
    //console.log(window.innerWidth);
    return (
        <>
            <div className="mainSlider">
                <Slider {...settings}>
                    {homeslide && homeslide.HomeBanner.map((data) => (
                        <div className='homePageSlider' key={data} style={{ backgroundImage: `url("https://f.shgcdn.com/f42431a0-bd0a-4a6e-8cfd-152d59dabd22/")` }}>
                            <div className='slideinfo'>
                                <div className='Container'>
                                    <h2>{data.title}</h2>
                                    <p>{data.testimonialText}</p>
                                    <button className='bigButton'><a href={data.link}>Shop Now</a></button>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </>
    )

    
    
}

export default HomeSlider
