import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'

const CustomerLove = ({CLTitle}) => {
    return (
        <div>
            <Box alignItems="center" textAlign="center">
                <Heading>
                    {CLTitle && CLTitle}
                </Heading>
                <Text mt="20px">
                    STAYED UPDATED with <span style={{ fontWeight: "bold" }}>@sacheubeauty</span>
                </Text>

                <div className="yotpo yotpo-pictures-widget" data-gallery-id="6078b7a367e29722209f4fe7" data-product-id="4746070032433"
                    style={{ width: '90%', margin: 'auto', padding: '35px 0' }}></div>
                {/* <div className="yotpo yotpo-pictures-widget" data-gallery-id="60789ba4d65534434cb467da" style={{width: '90%', margin: 'auto', paddingBottom: '50px'}}></div> */}

            </Box>
        </div>
    )
}

export default CustomerLove
