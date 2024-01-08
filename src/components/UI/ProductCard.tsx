import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react"
import { FaCartPlus } from "react-icons/fa"
import { FaStar } from "react-icons/fa6"
import { Product } from "../../utils/models"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../hook"
import { addProductToCart } from "../../store/cartSlice"

interface ProductProps {
  product: Product
}

const ProductCard = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch()
  const stars: JSX.Element[] = []
  for (let i = 1; i <= Math.round(product.rating.rate); i++) {
    stars.push(<FaStar key={i} color='orange' />)
  }

  function addToCart() {
    dispatch(addProductToCart(product))
  }

  return (
    <Card height='350px' width={{ base: "150px", sm: "200px", lg: "250px" }}>
      <CardBody display='flex' flexDirection='column' justifyContent='space-between'>
        <Link to={`/${product.id}`}>
          <Box overflow='hidden' maxWidth='100%' maxHeight='180px'>
            <Image width='100%' height='100%' objectFit='contain' src={product.image} />
          </Box>
        </Link>
        <Box display='flex' flexDirection='column'>
          <Link to={`/${product.id}`}>
            <Text p={0}>{product.title.substr(0, 36)}</Text>
          </Link>
          <Flex alignItems='center' gap='4px'>
            {stars}
            <Text>{product.rating["count"]}</Text>
          </Flex>
          <Flex alignItems='center' gap='12px'>
            <Text fontWeight={500}>{product.price}$</Text>
            <button onClick={addToCart}>
              <FaCartPlus color='green' size='1.4em' />
            </button>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  )
}

export default ProductCard
