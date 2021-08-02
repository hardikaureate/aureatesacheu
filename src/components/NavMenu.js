import React, { useContext } from "react"
import { ShopContext } from "../context/shopContext"
import { Link } from "react-router-dom"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid,
  Box,
  VStack,
} from "@chakra-ui/react"

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext)
  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <VStack p="1rem">
            <Link to="/">THICK SKIN SERUM</Link>
            <Link to="/">FACIAL ROLLER </Link>
            <Link to="/about">About</Link>
            <Link to="/newapp">React with Contentful</Link>
          </VStack>
        </DrawerBody>

        <DrawerFooter textAlign="center"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default NavMenu
