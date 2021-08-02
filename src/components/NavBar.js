import React, {useContext} from 'react'
import { Flex, Icon, Image, Box, Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import {MdMenu, MdShoppingCart} from 'react-icons/md'

const NavBar = () => {

    const {openCart, openMenu, checkout} = useContext(ShopContext)

    return (
        <Flex backgroundColor="#fff" alignItems="center" flexDir="row" justifyContent="space-between" p="2rem">
            <Icon fill="#000" cursor="pointer" as={MdMenu}  w={30} h={30} 
            onClick={() => openMenu()}></Icon>
            <Link to="/"><Image src="https://cdn.shopify.com/s/files/1/0257/7583/3137/files/sacheu-logo-2-black_140x.png?v=1599822560" /></Link>
            <Box><Icon onClick={() => openCart()} fill="#000" cursor="pointer" as={MdShoppingCart}  w={30} h={30}></Icon>
            <Badge backgroundColor="#f3eafd" borderRadius="50%" >{checkout.lineItems?.length}</Badge></Box>
        </Flex>
    )
}

export default NavBar
