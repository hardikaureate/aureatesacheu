import React,{useContext} from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import {
    Button, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Grid,Box,Text, Flex, Image
  } from "@chakra-ui/react"
  import { IoMdTrash } from "react-icons/io";

const Cart = () => {
    const {isCartOpen, closeCart, checkout, removeLineItem} = useContext(ShopContext)
    console.log({checkout})
    return (
        <div>
            <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems.length ? checkout.lineItems.map(item => (
              
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                    <Flex alignItems="center" justifyContent="center">
                        <IoMdTrash height={90} width={90} cursor="pointer" onClick={() => removeLineItem(item.id)} />
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                        <Image src={item.variant.image.src}/>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                        <Text><Link to={`/products/${item.variant.product.handle}`}>{item.title}</Link></Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                        <Text>${item.variant.price}</Text>
                    </Flex>
                </Grid>
            )) : <Box h="100%" w="100%">
                    <Text h="100%" w="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center"> Your Cart is Empty!</Text>
                </Box>
            }
          </DrawerBody>

          {checkout.lineItems?.length ?  
          <DrawerFooter>
            <Button w="100%">
              <a w="100%" href={checkout?.webUrl}> Checkout</a>
            </Button>
          </DrawerFooter> : null }
        </DrawerContent>
      </Drawer>
        </div>
    )
}

export default Cart
