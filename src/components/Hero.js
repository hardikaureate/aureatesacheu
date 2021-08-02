import React from 'react'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react'

const Hero = () => {
    return (
        <div>
            <Box backgroundColor="#057498" w="100%" position="relative" h="80vh" className="color-change-4x">
                <Image src="https://cdn.shopify.com/s/files/1/0582/4154/8474/products/sacheu-silky-sleep-silky-sleep-essentials-set-limited-edition-15728231972913_700x_a2473292-bbe5-4cbe-ae3a-0222a0b55177.png?v=1625555674"
                h="85%" m="auto" objectFit="contain" objectPosition={["top", "center"]} />
                <Text position="absolute" bottom="10%" w="100%" color="#fff" textAlign="center" fontWeight="bold" fontSize="4rem" className="focus-in-contract-bck">
                    Introducing Sacheu Beauty
                </Text>
                {/* <Center>
                    <Button w="10rem" bottom="5%" backgroundColor="#057498" color="#fff" _hover={{opacity: '70%'}} position="absolute">
                        Shop Now
                    </Button>
                </Center> */}
            </Box>
        </div>
    )
}

export default Hero
