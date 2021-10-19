import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    domain: 'sacheustore.myshopify.com',
    storefrontAccessToken: '251aff87463a43306b6c981179644ecf'
  });

  //console.log({client})
  class ShopProvider extends Component {
      
    
    state = {
        product: {},
        products: [],
        checkout: {},
        collectionId: {},
        isCartOpen: false,
        isMenuOpen: false
    }

    componentDidMount(){
        if(localStorage.checkout_id){
            this.fetchCheckout(localStorage.checkout_id)
        } else {
            this.createCheckout()
        }
        /* if(localStorage.collectionId){
            this.fetchColletion(localStorage.collectionId)
        } */
    }

    createCheckout = async() => {
        const checkout = await client.checkout.create()
        localStorage.setItem("checkout_id", checkout.id)
        this.setState({ checkout: checkout })
    }

    fetchCheckout = (checkoutId) => {
        client.checkout
        .fetch(checkoutId)
        .then((checkout) => {
            this.setState({ checkout: checkout })
        })
    }
    
    fetchColletion = (collectionId) => {
        client.collection
        .fetch(collectionId)
        .then((collection) => {
            this.setState({ collection: collection })
        })
    }

    addItemToCheckout = async(variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10)
            }
        ]
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout})

        this.openCart()
    }

    removeLineItem = async(lineItemIdsToRemove) => {
        const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove)
        this.setState({ checkout: checkout })
    }

    fetchAllProducts = async() => {
        const products = await client.product.fetchAll(12);
        this.setState({ products: products})
        //console.log(products);
    }

    fetchAllCollectionProducts = async() => {
        const collections = await client.collection.fetchAllWithProducts();
        this.setState({ collections: collections})
        //console.log(collections);
    }
    
    fetchCollectionWithHandle = async(collectionId) => {
        //const collectionsdata = await client.collection.fetchWithProducts(collectionId)
        const collectionsdata = await client.collection.fetchWithProducts('Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MjE2NDA2MTM3MA==')
        this.setState({ collectionsdata: collectionsdata })
        console.log('cccccccc',collectionsdata);
        //console.log('xxxxxxxx',collectionsdata.products);
    }

    fetchProductWithHandle = async(handle) => {
        const product = await client.product.fetchByHandle(handle)
        this.setState({ product: product })

    } 

    closeCart = () => {this.setState({isCartOpen: false})}

    openCart = () => {this.setState({isCartOpen: true})}

    closeMenu = () => {this.setState({isMenuOpen: false})}

    openMenu = () => {this.setState({isMenuOpen: true})}




    render() {
        console.log(this.state.checkout)
        return (
            <ShopContext.Provider 
                value={{...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchAllCollectionProducts: this.fetchAllCollectionProducts,
                fetchCollectionWithHandle: this.fetchCollectionWithHandle,
                fetchProductWithHandle: this.fetchProductWithHandle,
                addItemToCheckout: this.addItemToCheckout,
                removeLineItem: this.removeLineItem,
                closeCart: this.closeCart,
                openCart: this.openCart,
                closeMenu: this.closeMenu,
                openMenu: this.openMenu           
            }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider
