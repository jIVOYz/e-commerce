import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react"
import { FaCartPlus } from "react-icons/fa"
import { FaStar } from "react-icons/fa6"

interface ProductProps {
  title: string
  img: string
  ratingStars: number
  ratingCount: number
  price: number
}

const ProductCard = ({ title, img, ratingStars, ratingCount, price }: ProductProps) => {
  const stars: JSX.Element[] = []
  for (let i = 1; i <= ratingStars; i++) {
    stars.push(<FaStar color='orange' />)
  }

  return (
    <Card width='250px'>
      <CardBody>
        <Box maxWidth='100%'>
          <Image src={img} />
        </Box>
        <Text fontSize={14}>{title}</Text>
        <Flex alignItems='center' gap='4px'>
          {stars}
          <Text>{ratingCount}</Text>
        </Flex>
        <Flex alignItems='center' gap='6px'>
          <Text fontWeight={500}>{price}</Text>
          <FaCartPlus color='green' size='1.2em' />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default ProductCard
