import { Box, Button, Container, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa6"
import { useAppDispatch, useAppSelector } from "../hook"
import { useEffect } from "react"
import { fetchProductsByCategory, getSingleProduct } from "../store/productSlice"
import { useParams } from "react-router-dom"
import { addProductToCart } from "../store/cartSlice"

const ProductPage = () => {
  const [isMobile, isDesktop] = useMediaQuery(["(max-width: 1023px)", "(min-width: 1024px)"])
  const dispatch = useAppDispatch()
  const { productId } = useParams()
  const product = useAppSelector(state => state.products.product)

  useEffect(() => {
    dispatch(getSingleProduct(productId))
  }, [dispatch])

  useEffect(() => {
    dispatch(
      fetchProductsByCategory({
        limit: 4,
        categoryName: product?.category,
      })
    )
  }, [product])

  function addToCart() {
    dispatch(addProductToCart(product))
  }

  const stars: JSX.Element[] = []
  for (let i = 1; i <= Math.round(product?.rating.rate ?? 0); i++) {
    stars.push(<FaStar key={i} size='1.5rem' color='orange' />)
  }

  return (
    <>
      <Container
        mt='90px'
        maxW='1140px'
        display='flex'
        gap='16px'
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          w={{ base: "100%", lg: "50%" }}
          direction='column'
          alignItems={{ lg: "flex-start", base: "center" }}
          gap='24px'
        >
          <Box overflow='hidden' maxW='100%' maxH='530px'>
            <Image src={product?.image} objectFit='contain' width='100%' height='100%' />
          </Box>
          {isDesktop && <Text fontSize='18px'>{product?.description}</Text>}
        </Flex>
        <Flex direction='column'>
          <Text mt={{ base: "24px", md: "0" }} fontSize='24px' fontWeight={500}>
            {product?.title}
          </Text>
          <Flex mt='14px' gap={2} alignItems='center'>
            {stars}
            <Text fontSize={16}>{product?.rating.count}</Text>
          </Flex>
          <Flex
            mt='30px'
            alignItems={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            gap='10px'
          >
            <Text fontSize='24px' fontWeight={500}>
              {product?.price}$
            </Text>
            <Flex gap={2}>
              <Button variant='base'>Buy</Button>
              <Button onClick={addToCart} variant='dark'>
                Add to cart
              </Button>
            </Flex>
          </Flex>
          {isMobile && (
            <Text mt={{ base: "24px", md: "0" }} fontSize='18px'>
              {product?.description}
            </Text>
          )}
        </Flex>
      </Container>
    </>
  )
}

export default ProductPage
