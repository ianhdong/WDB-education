import React from 'react'
import Categories from './Components/Categories'
import FrontPage from './Components/FrontPage'
import Header from './Components/Header'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Header/>
      <FrontPage/>
      <Categories/>
    </ChakraProvider>
  )
}

export default App