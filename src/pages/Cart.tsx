import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../hook"
import { decrementAmount, incrementAmount, removeProductFromCart } from "../store/cartSlice"
import { CloseIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

const Cart = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart.cart)
  const { products } = cart

  return (
    <Container maxW='1140px'>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.isArray(products) &&
              //todo fix undefined item
              products.map(item => (
                <Tr key={crypto.randomUUID()}>
                  <Td>
                    <Box maxW='50px' maxH='50px' objectFit='contain' overflow='hidden'>
                      <Image src={item.product.image} maxW='100%' maxH='100%' />
                    </Box>
                  </Td>
                  <Td>
                    <Link to={`/${item.product.id}`}>
                      <Text>{item.product.title.substring(0, 48)}</Text>
                    </Link>
                  </Td>
                  <Td>
                    <Text fontWeight={500}>{item.product.price}$</Text>
                  </Td>
                  <Td display='flex' flexDirection='column' alignItems='center'>
                    <button onClick={() => dispatch(incrementAmount({ id: item.product.id }))}>+</button>
                    <Text>{item.amount}</Text>
                    <button onClick={() => dispatch(decrementAmount({ id: item.product.id }))}>-</button>
                  </Td>
                  <Td>
                    <Button
                      variant='transparent'
                      _hover={{ bg: "neutral.200" }}
                      p={0}
                      onClick={() => dispatch(removeProductFromCart(item.product.id))}
                    >
                      <CloseIcon />
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Cart
