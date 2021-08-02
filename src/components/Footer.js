import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, VStack, Image, Text } from '@chakra-ui/react'


const Footer = () => {
    return (
        <Box backgroundColor="#057498">
            <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} color="#fff" fontWeight="bold">
                <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549" />
                <VStack p="2rem" justifyContent="center">
                    <Link to="/">Wholesale Inquiries</Link>
                    <Link to="/">Track My Order</Link>
                    <Link to="/">Returns & Exchanges</Link>
                </VStack>
                <VStack p="2rem" justifyContent="center">
                    <Link to="/">Ultimate SACHEU Beauty Kit</Link>
                    <Link to="/">Using SACHEU Beauty</Link>
                    <Link to="/">Terms of Service</Link>
                </VStack>
            </Grid>
        <Box>
                <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
                    © Copyright <Link to="https://aureatelabs.com/">www.Aureatelabs.com</Link>
                </Text>
            </Box>
        </Box>
    )
}

export default Footer
