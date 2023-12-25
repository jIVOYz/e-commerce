import { Button, Flex, Heading } from "@chakra-ui/react"
import ProductCard from "./components/UI/ProductCard"

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Button variant='base' size='md'>
        Buy
      </Button>
      <Heading># Title 1</Heading>

      <Flex gap={6}>
        <ProductCard
          title='Title'
          ratingCount={120}
          ratingStars={4}
          img='https://newtime.ua/upload/2023-09/uKF2cKKv5mj39Fr.webp'
          price={119.99}
        />
      </Flex>
    </>
  )
}

export default App
