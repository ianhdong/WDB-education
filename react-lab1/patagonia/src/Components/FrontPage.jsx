import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Spacer, IconButton, Modal, ModalContent, ModalFooter, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { Search2Icon, HamburgerIcon, PlusSquareIcon, ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons'

import mountains from '../Images/mountains.png'

const FrontPage = () => {
    // TODO: add React hook for whether Modal is opened.
    const [ opened, setOpen ] = useState(false);
    // TODO: add React hook keeping track of times Modal has been opened.
    const [ count, setCount ] = useState(0);

    // TODO: add useEffect() that changes document title based on whether Modal is open.
    useEffect(() => {
        if (opened) {
            document.title = "Patagonia - Learn More";
        } else {
            document.title = "Patagonia - Home";
        }
      });
    
    
    // TODO: event handler for when button has been clicked to open modal
    const buttonOpen = (e) => {
        setOpen(true);
        setCount(count + 1);
    }
    
    // TODO: event handler fro when button has been clicked to close modal
    const buttonClose = (e) => {
        setOpen(false);
    }

    // TODO: complete the Front Page of the page (the area contained by the mountain background)
    return (
        <Box height="50%" align="center" bgImage={mountains} bgRepeat="no-repeat" bgSize="cover" bgPos="center">
            <Box color="white" fontWeight={700} bgColor="none">
                <Flex justifyContent="center" alignItems="center">
                    {/* TODO: Add the navbar, including the Search2Icon and PlusSquareIcon */}
                    {/* TODO: Create a clickable HamburgerIcon to open the Modal onClick adjacent to the two icons from above */}
                </Flex>
            </Box>
            {/* TODO: Add Box components for
                1. "Keep the Tongass Roadless" (color="white" fontWeight={700} fontSize="3.8rem"), 
                2. "Make your voice heard..." (fontWeight={700)
                text blocks centered side-by-side */}
            
            <Box w="100%" textAlign="center" mt={10}>
                {/* TODO: Add a button containing ExternalLinkIcon that has the next "Watch the Video" */}
                
                {/* TODO: Add a button for "Submit a Comment" */}

            </Box>
            {/* TODO: add necessary fields for modal open and close */}
            <Modal size="6xl">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* TODO: add modal counter value here */}
                </ModalBody>
                <ModalFooter>
                    {/* TODO: add a button to close the modal here */}
                </ModalFooter>
                </ModalContent>
            </Modal>
            {/* TODO: Add and format the ChevronDownIcon at the bottom of the front page */}
        </Box>
    )
}

export default FrontPage