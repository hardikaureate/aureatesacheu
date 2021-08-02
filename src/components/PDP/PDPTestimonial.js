import React from 'react'
import Slider from "react-slick";
import './pdpcss/testimonial.css'
import { Image } from '@chakra-ui/react';
import testimonialsData from '../../sitedata.json'

const testimonial = testimonialsData?.pdppagedata
//console.log({ testimonial })
const PDPTestimonial = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (



        <Slider {...settings}>
            {testimonial?.testimonials && testimonial?.testimonials.map((num, i) =>
                <div className="sliderData" key={i}>
                    <div className="testimonialInfo Container">
                        <div className="sliderImage">
                            <Image src={`/${num.images.src}`} />
                        </div>
                        <div className="sliderText">
                            <p>{num.testimonialText && num.testimonialText}</p>
                            <h3>
                                {num.name && num.name}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </Slider>
    )
}

export default PDPTestimonial
