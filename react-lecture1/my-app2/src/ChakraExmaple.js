import logo from './logo.svg';
import './App.css';
import {Heading, Button} from '@chakra-ui/react'
function ChakraExample() {
  let x = 5;
  return (
    <>
      <Heading>{x}</Heading>
      <Button size = 'lg' variant = 'ghost'>Click Me!</Button>
    </>
  )
}

export default ChakraExample;
