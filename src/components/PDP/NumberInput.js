import React from 'react'
import { HStack, IconButton, Input, useNumberInput } from '@chakra-ui/react'

const NumberInput = props => {
    const {defaultValue=1, step=1, min=1,containerProps, allowMouseWheel=true,inputProps, buttonProps} = props
    const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} = useNumberInput({defaultValue, step, min, allowMouseWheel})
    const inc = getIncrementButtonProps(buttonProps)
    const dec = getDecrementButtonProps(buttonProps)
    const input = getInputProps(inputProps)


    return (
        <HStack minW="28" {...containerProps} className="cartQuantityInput">
            <IconButton aria-label={`Decrement by ${step}`} variant="outline" borderColor="gray.300" {...dec}></IconButton>
            <Input textAlign="center" {...input} className="cartInputText" />
            <IconButton area-aria-label={`Increment by ${step}`} variant="outline" borderColor="gray.300" {...inc} />    
        </HStack>
    )
}

export default NumberInput
