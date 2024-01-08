import { Flex } from "@chakra-ui/react"
import { Product } from "../../utils/models"
import ProductCard from "../UI/ProductCard"

interface Props {
  products: Product[]
}
const ProductList = ({ products }: Props) => {
  return (
    <Flex wrap='wrap' justifyContent={{ base: "center", md: "flex-start" }} gap='32px' alignItems='center'>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Flex>
  )
}

export default ProductList
