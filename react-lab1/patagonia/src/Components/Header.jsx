import React from 'react'
import { Box, Flex, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

/*
Header Component - top bar containing "Patagonia" text, Deal, and Location
inputs
- none
*/
const Header = () => {
    return (
        <>
        <Flex width="100%" background="#2B0096" height="50px" color="white" justifyContent="center" alignItems="center" pt="16px" fontWeight={700} fontSize="14px">
            <Box ml="3%" w='40%' h='10'>Patagonia San Francisco, CA</Box>
            <Spacer/>
            <Box ml="12%" w="40%" h='10'>10% Off Online Orders Over $200*<ChevronDownIcon color="white" w ={6} h={6}/></Box>
            <Spacer/>
            <Box ml="15%" w='20%' h='10'>Login</Box>
        </Flex>
        </>
    )
}

export default Header