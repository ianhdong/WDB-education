import React from 'react'
import { Box } from '@chakra-ui/react'
import forest from '../Images/forest.png'

/*
Category Component - a card containing the name of the category
inputs
- name: string category name
*/
const Category = ({ name }) => {
    console.log(name)
    return (
        // TODO: There is missing formatting. Add it the Box components below. Remember that the background has to be formatted too.
        <Box>
            <Box bgImage={forest}>
                <Box align="center" color="white" pt="35%" fontSize={42} fontWeight={700}>
                </Box>
            </Box>
        </Box>
    )
}

export default Category