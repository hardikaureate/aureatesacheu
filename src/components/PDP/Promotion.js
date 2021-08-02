import React from "react";
import "./pdpcss/pdppage.css";
import { Text, Image } from "@chakra-ui/react";

const Promotion = ({promotionTitle, promotionSecond}) => {
  return (
    <div id="container" className="Container">
      <div className="pdPromotion">
        <div className="promotionImage">
          <Image src="https://f.shgcdn.com/7c99791f-e8ae-471e-acd6-1f7315716230/" />
        </div>
        <div className="promotionInfo">
          <h2 className="promotion_title">{promotionTitle && promotionTitle}</h2>
          <div className="promotion_text">
            <Text>
              As opposed to traditional jade and quartz stones which have huge
              environmental footprints stainless steel is made from recycled
              material
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </div>
          <h2 className="promotion_title">{promotionSecond && promotionSecond}</h2>
          <div className="promotion_list promotion_text">
            <ul>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li>
                
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </li>
              <li>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pdPromotion">
        <div className="promotionImage">
          <Image src="https://f.shgcdn.com/08da9bf8-017b-410d-8357-f3993f8d62fa/" />
        </div>
        <div className="promotionInfo">
          <h2 className="promotion_title">STAINLESS STEEL BEAUTY BLISS</h2>
          <div className="promotion_text">
            <div className="promotion_list promotion_text">
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
<Text>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="youtubeSection" style={{ textAlign: "center" }}>
        <div className="youtubetitle">
          <h2>LEARN ALL ABOUT THICK SKIN</h2>
        </div>
        <div className="youtubevideo" style={{ textAlign: "center", margin: "0 auto" }}>
          <iframe width="1238" height="696" className="videoframe" src="https://www.youtube.com/embed/o33HSF3ql2E" title="myFrame"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
