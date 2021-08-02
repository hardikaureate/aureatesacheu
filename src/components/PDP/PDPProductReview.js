import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
//import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";
import "./pdpcss/pdppage.css";

const PDPProductReview = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, product } = useContext(ShopContext);
  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  let extractedInfo = "";
  if (product.id) {
    const buff = Buffer.from(product?.id, "base64");
    const decodedId = buff.toString("ascii");
    extractedInfo = decodedId.split(/[\s/]+/).pop();
  }
  //console.log('review',product)
  return (
    <>
      <div className="Container pdpreviews">
        <div
          className="yotpo yotpo-main-widget"
          data-product-id={extractedInfo}
          data-price={`${product.variants[0].price}`}
          data-currency="USD"
          data-name={product.title}
          data-url={`/products/${product.handle}`}
          data-image-url={product.images[0].src}
          data-description={product.description}
          style={{ width: "90%", padding: "35px 0" }}></div>

        <div
          className="yotpo yotpo-main-widget"
          data-product-id="4746070032433"
          data-price="35.00"
          data-currency="USD"
          data-name="Gua Sha - Stainless Steel"
          data-url="https://sacheu.com/products/gua-sha"
          data-image-url="https://cdn.shopify.com/s/files/1/0257/7583/3137/products/sacheu-gua-sha-gua-sha-stainless-steel-15395624288305_large.jpg%3Fv=1623381821"
          data-description=""
          style={{ width: "90%", padding: "35px 0" }}></div>
      </div>
    </>
  );
};

export default PDPProductReview;
