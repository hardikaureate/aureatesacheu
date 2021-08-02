import React from 'react'
import { Box, Heading, Text, Center } from '@chakra-ui/react'

const RichText = ({heading, text}) => {
    return (
        <Box p="1rem">
            <Center display="flex" flexDir="column" textAlign="center">
                <Heading py="4rem">
                    {heading && heading}
                </Heading>
                <Text pb="2rem" w="70%" m="auto" textAlign="center">
                    {text && text}
                </Text>
            </Center>
        </Box>
    )
}

export default RichText
