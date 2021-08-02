import React, { useContext, useEffect } from "react";
import './homecss/homeFeaturedProduct.css'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'
//import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

const CollectionList = () => {
  const { handle } = useParams()
  const { fetchAllCollectionProducts, collections } = useContext(ShopContext);
  useEffect(() => {
    fetchAllCollectionProducts(handle);
  }, [fetchAllCollectionProducts,handle]);

  /* const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  } */
  console.log({ collections });

  if (!collections) return <div>...Loading</div>
  return (
    <div className="FeaturedProducts" style={{padding:'100px'}}>
      <div className="Container">
        {/* <h2>Collections</h2> */}
        <div className="product-listing">
          {collections.map((collection) => (
            <div className="itemBox" key={collection.id}>
              <div className="item">
                {/* {collection.variants[0].compareAtPrice > collection.variants[0].price ? (<span className="sale">SALE</span>) : (<span></span>)} */}
                <div className="imageContainer">
                  <Link to={`/collections/${collection.handle}`} key={collection.id} aria-label={`Navigate to ${collection.title} collection page`}>
                    <Image src={collection.image.src} />
                  </Link>
                </div>
                <div className="productInfo">
                  <Link to={`/collections/${collection.handle}`}>
                    <h3 className="itemName">{collection.title}</h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* {collections.products.map((product) => (
          <>
            <div className="itemBox" key={product.id}>
              <div className="item">
                {product.variants[0].compareAtPrice > product.variants[0].price ? (<span className="sale">SALE</span>) : (<span></span>)}
                <div className="imageContainer">
                  <Link to={`/products/${product.handle}`} key={product.id} aria-label={`Navigate to ${product.title} product page`}>
                    <Image src={product.images[0].src} />
                  </Link>
                </div>
                <div className="productInfo">
                  <Link to={`/products/${product.handle}`}>
                    <h3 className="itemName">{product.title}</h3>
                  </Link>
                  <p className="relatedProPrice">
                    ${product.variants[0].price}
                  </p>
                  <Button mt="3%" className="cartButton" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </>
        ))} */}
      </div>
    </div>
  )
}

export default CollectionList
