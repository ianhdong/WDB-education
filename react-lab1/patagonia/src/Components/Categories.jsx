import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Category from './Category'

/*
Categories Component - a scrollable horizontally aligned set of Category components
inputs
    none
*/
const Categories = () => {
    return (
        // TODO: There's missing formatting in the Box components below. Add it and Category components.
        <Box>
            <HStack spacing={7} overflow="scroll" mr={-50}>
                {/* TODO: Add Category components here */}
            </HStack>
            
        </Box>
    )
}

export default Categories