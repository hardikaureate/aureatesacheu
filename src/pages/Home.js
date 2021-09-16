import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Image, Button } from '@chakra-ui/react'
//import Hero from '../components/Hero'
//import ImageWithText from '../components/ImageWithText'
import RichText from '../components/RichText'
import HomeSeenLogo from '../components/Homepage/HomeSeenLogo'
import CollectionList from '../components/Homepage/CollectionList'
import HomePromotionBannerThird from '../components/Homepage/HomePromotionBannerThird'
import PDPRelatedProduct from '../components/PDP/RelatedProduct'
import './css/homepage.css'
import HomeSlider from '../components/Homepage/HomeSlider'
import HomePromotionBannerSecond from '../components/Homepage/HomePromotionBannerSecond'
import HomePromotionBannerFirst from '../components/Homepage/HomePromotionBannerFirst'
import HomeCustomerLove from '../components/Homepage/HomeCustomerLove'
import SkeletFunc from '../components/Homepage/SkeletFunc'
import Skeleton from 'react-loading-skeleton'


const Home = () => {

  const { fetchAllProducts, products, addItemToCheckout } = useContext(ShopContext)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    fetchAllProducts()
  }, [fetchAllProducts])
  console.log('HOMEPAGE-PRODUCTS', products)

  if (!products) return <div>...Loading</div>

  return (
    <>
      <Box>
        {/* <Hero /> */}
        <HomeSlider />
        <HomeSeenLogo title="AS SEEN ON" />
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fillOpacity="1" d="M0,192L15,181.3C30,171,60,149,90,133.3C120,117,150,107,180,106.7C210,107,240,117,270,138.7C300,160,330,192,360,176C390,160,420,96,450,85.3C480,75,510,117,540,160C570,203,600,245,630,250.7C660,256,690,224,720,202.7C750,181,780,171,810,192C840,213,870,267,900,266.7C930,267,960,213,990,160C1020,107,1050,53,1080,74.7C1110,96,1140,192,1170,229.3C1200,267,1230,245,1260,240C1290,235,1320,245,1350,240C1380,235,1410,213,1425,202.7L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path>
</svg> */}
        <RichText heading="JOIN THE SACHEU COMMUNITY" text="It's like the best pyjama party you've ever been to! We're inclusive, passionate about beauty, and keep it real. Plus our community has first dibs on new product releases and discounts:)" />
        <div className="Container">
          <div className="productContainer">
            <div className="product-listing">
              {products.map((product, i) => (
                <>
                  <div className="itemBox" key={i}>
                    <div className="item">
                      {product.variants[0].compareAtPrice > product.variants[0].price ? (<span className="sale">SALE</span>) : (<span></span>)}
                      <div className="imageContainer">
                        <Link to={`/products/${product.handle}`} key={product.id} aria-label={`Navigate to ${product.title} product page`}>
                          {loading && <Skeleton height={306} />}
                          {!loading && <Image src={product.images[0].src} />}
                        </Link>
                      </div>
                      <div className="productInfo">
                        <Link to={`/products/${product.handle}`}>
                          {loading && <Skeleton height={30} />}
                          {!loading && <h3 className="itemName">{product.title}</h3>}
                        </Link>
                        <p className="relatedProPrice">
                          {loading ? <Skeleton height={30} /> : `${product.variants[0].price}`}
                        </p>
                        <Button mt="3%" className="cartButton" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
                          Add To Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* <iframe src='https://www.faire.com/embed/bw_d5vr3f6i4z' scrolling='no' style={{width:'500px', height:'700px', margin: '0 auto',border: 'none',display: 'block',maxWidth: '100%'}}></iframe> */}
        {/* <RichText heading="WITH OUR SILKY SLEEP SET" />
        <ImageWithText button image="https://cdn.shopify.com/s/files/1/0257/7583/3137/files/Stainless-steel-difference-2_1000x.jpg?v=1609902389"
          heading="WHY STAINLESS STEEL?" text="As opposed to traditional jade and quartz stones which have huge environmental footprints, 
                stainless steel is made from recycled material and is itself 100% recyclable, 
                giving it a very eco-friendly footprint. (our packaging is also made with recycled FSC cardboard).

                Additionally, unlike jade and quartz stones, stainless steel is non-porous which means there are no risks of harboring bacteria
                and spreading it across your skin during your skincare routine. Stainless Steel is the way to go, for your skin and the planet." />
        <ImageWithText reverse button image="https://cdn.shopify.com/s/files/1/0257/7583/3137/files/BANNER_1000x.jpg?v=1615404200"
          heading="FUTURES WITHOUT VIOLENCE" text="Empowering women is part of SACHEU Beauty's core values. 
                Our founder Sarah Cheung is an abuse survivor herself. SACHEU Beauty is committed to helping end and prevent domestic violence, sexual violence and abuse. 

                Through our partnership with Futures Without Violence, 
                we are donating a portion of our profits to support their ground breaking programs and 
                campaigns that empower individuals and organizations working towards keeping women and children safe around the world." /> */}
        <HomePromotionBannerFirst />
        <HomePromotionBannerSecond />
        <HomeCustomerLove />
        <HomePromotionBannerThird />

        <CollectionList />
        <div className="featuredCollections">
          <div className="Container">
            <span className="subtitle">LOOKING FOR A PERFECT MATCH FOR OUR THICK SKIN SERUM?</span>
            <h2>INTRODUCING STAINLESS STEEL BEAUTY BLISS</h2>
            <PDPRelatedProduct />
          </div>
        </div>
        {/* <SkeletFunc /> */}
      </Box>

    </>
  )
}

export default Home
