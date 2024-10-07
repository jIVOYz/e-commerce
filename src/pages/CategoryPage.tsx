import { Container, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductList from "../components/Products/ProductList"
import { useAppDispatch, useAppSelector } from "../hook"
import { fetchProductsByCategory } from "../store/productSlice"
import ProductsFilter from "../components/ProductsFilter"
import { setFilteredData, setInitialData } from "../store/searchProductSlice"

const CategoryPage = () => {
  const { categoryName } = useParams()
  const dispatch = useAppDispatch()
  const [sortBy, setSortBy] = useState<string>("asc")

  useEffect(() => {
    dispatch(fetchProductsByCategory({ categoryName: categoryName!, sort: sortBy }))
  }, [sortBy])
  const products = useAppSelector(state => state.products.list)
  useEffect(() => {
    dispatch(setInitialData(products))
    dispatch(setFilteredData(products))
  }, [dispatch, products])
  const filteredData = useAppSelector(state => state.searchProducts.filteredData)
  return (
    <Container maxW='1140'>
      <Heading _firstLetter={{ textTransform: "uppercase" }} mt='100px' mb='24px'>
        {categoryName}
      </Heading>
      <ProductsFilter setSortBy={setSortBy} sortBy={sortBy} />
      <ProductList products={filteredData} />
    </Container>
  )
}

export default CategoryPage
