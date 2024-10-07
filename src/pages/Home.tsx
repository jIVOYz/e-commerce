import { Container, Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import ProductList from "../components/Products/ProductList"
import { useAppDispatch, useAppSelector } from "../hook"
import { fetchProducts } from "../store/productSlice"
import { setFilteredData, setInitialData } from "../store/searchProductSlice"

const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProducts({}))
  }, [dispatch])
  const products = useAppSelector((state) => state.products.list)

  useEffect(() => {
    dispatch(setInitialData(products))
    dispatch(setFilteredData(products))
  }, [products, dispatch])
  const filteredData = useAppSelector(state => state.searchProducts.filteredData)

  return (
    <Container maxW="1140px">
      <Heading mt="100px" mb="24px">
        All products
      </Heading>
      <ProductList products={filteredData} />
    </Container>
  )
}

export default Home
