import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import { Box, Grid, Button, Image, Text, Heading, Flex } from '@chakra-ui/react'
import './PDP.css'
import allsitedata from '../sitedata.json'
import CustomerLove from '../components/PDP/CustomerLove'
import Promotion from '../components/PDP/Promotion'
import PDPRelatedProduct from '../components/PDP/RelatedProduct'
import PDPProductReview from '../components/PDP/PDPProductReview'
import PDPTestimonial from '../components/PDP/PDPTestimonial'
import NumberInput from '../components/PDP/NumberInput'
import Skeleton from 'react-loading-skeleton'

const ProductPage = () => {

    const { handle } = useParams()
    const [loading, setLoading] = useState(true)
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    //console.log('PDPPageooooo',product.id)

    const pdpData = allsitedata?.pdppagedata
    //console.log('accordianList',pdpData)

    const [imageclick, setImageclick] = useState(0)

    const [productQuantity, setProductQuantity] = React.useState(1)
    const handleProductQuantity = (quantityAsString, quantityAsNumber) => {
        setProductQuantity(quantityAsNumber)
    }

    const Accordion = ({ title, children }) => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <div className="accordion-wrapper">
                <div className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>{title}</div>
                <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                    <div className="accordion-content">{children}</div>
                </div>
            </div>
        );
    };

    //return extractedInfo;



    if (!product.title) return <div>Loading....</div>
    return (
        <div>
            <Box p="2rem">
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">

                    <div className="proLeft productImage">
                        <div className="imageThumbnail">
                            {product.images && product.images.map((item, i) => {
                                return loading ? <Skeleton width={90} height={70} /> : <Image key={i} onClick={() => setImageclick(i)} className="productMainImage" src={item && item.src} width="10%" height="auto" />
                            })}
                        </div>
                        <Flex className="productImg" justifyContent="center" alignItems="center">
                            {loading ? <Skeleton width={750} height={600} /> : <Image src={product.images[imageclick].src} />}
                        </Flex>
                    </div>

                    <Flex flexDirection="column" justifyContent="center" px="2rem">
                        <Heading pb="2rem" className="PDP_productTitle">
                            {product.title}
                        </Heading>

                        {/* <Heading pb="2rem" className="PDP_productTitle">{product.id}</Heading> */}
                        <Text className="PDP_cartprice" fontWeight="bold" pb="1rem">${product.variants[0].price}</Text>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div className="yotpo bottomLine" data-product-id="4746070032433" style={{ display: 'inlineBlock' }}></div>
                        </div>

                        {/* {product.variants[0].compareAtPrice > product.variants[0].price ? <Text pb="2rem" bottom="15%" w="100%" textDecoration="line-through" 
                    color="red.500">${product.variants[0].compareAtPrice}</Text> : <span></span>} */}
                        {/* <Text pb="2rem" color="gray.500">{product.description}</Text> */}
                        <Text pb="2rem" color="gray.500"><div dangerouslySetInnerHTML={{ __html: product.description }}></div></Text>

                        <div className="klarnaText">
                            4 interest-free payments of $6.00. <strong>Klarna</strong> Learn more
                        </div>

                        <div className="cartgroup">
                            <div className="Container cartInput">
                                <NumberInput inputProps={{ 'aria-label': 'Product quantity' }} onChange={handleProductQuantity} />
                            </div>
                            <div className="Container cart-btn cartsize">
                                <Button className="atcbtn" onClick={() => addItemToCheckout(product.variants[0].id, 1)} quantity={productQuantity}>Add To Cart</Button>
                            </div>
                        </div>

                        <div variant="solid" className="fourfeature">
                            <ul className="PDP_cartfeatures" style={{ listStyle: 'none' }}>
                                {pdpData.featureslist && pdpData.featureslist.map((itemlist, index) => {
                                    return <li key={index} className="PDP_cartfeatureslist"><Image src={`/${itemlist.images.src}`} width="100%" height="100%" />{itemlist.title}</li>
                                })}
                            </ul>
                        </div>

                        <div className="infoAccordion wrapper">
                            {pdpData.accordiandata && pdpData.accordiandata.map(list => {
                                return <Accordion title={list.title} key={list.id}>{list.content}</Accordion>
                            })}
                        </div>
                    </Flex>

                </Grid>
            </Box>

            <Box p="2rem">
                <CustomerLove CLTitle="CUSTOMER LOVE ✨✨✨" />
            </Box>

            <Box p="2rem">
                <Promotion promotionTitle="SACHEU BEAUTY INTRODUCES" promotionSecond="FUTURES WITHOUT VIOLENCE" />
            </Box>

            <Box p="0rem">
                <PDPTestimonial />
            </Box>

            <Box p="2rem">
                <PDPProductReview />
            </Box>

            <Box p="2rem">
                <PDPRelatedProduct />
            </Box>



        </div>
    )
}

export default ProductPage
