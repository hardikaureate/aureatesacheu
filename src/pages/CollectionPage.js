import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Image } from '@chakra-ui/react'
import './css/Collection.css'
import AddToCart from '../components/Homepage/AddToCart'



const ProductPage = () => {
  const [productQuantity, setProductQuantity] = useState(1)
    const { handle } = useParams()
  const { fetchCollectionWithHandle, collectionsdata, addItemToCheckout } = useContext(ShopContext);
  useEffect(() => {
    fetchCollectionWithHandle(handle);
  }, [fetchCollectionWithHandle,handle]);
    
    //if(!collections.title) return <div>...Loading</div>
    
    //const collproduct = collections.products
    console.log('collpage',collectionsdata)
    
    return (
        <div className="relatedProduct">
        <div className="Container">
          <h2>Related Sacheu Products</h2>
          <div className="productContainer">
            <div className="product-listing collection">

            
            {collectionsdata && collectionsdata.products.map((product) => (
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
                            </Button>{setProductQuantity}
                            <AddToCart className='cartButton' productId={product.variants[0].id} quantity={productQuantity}/>
                          </div>
                        </div>
                      </div>
              </>
            ))}
            
          </div>
        </div>
      </div>
      </div>
    )
}

export default ProductPage
