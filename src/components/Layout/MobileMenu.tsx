import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

interface Props {
  setIsMenuOpen: Function
  setSelectedCategory: Function
  categories: string[]
}

const MobileMenu = ({ setIsMenuOpen, categories, setSelectedCategory }: Props) => {
  return (
    <Box bg='dark.1'>
      <Flex wrap='wrap' gap={2} p={2}>
        {categories.map((c, i) => (
          <Link key={i} to={`/category/${c}`}>
            <Button
              onClick={e => {
                setIsMenuOpen(false)
                setSelectedCategory(e.target.textContent)
              }}
              variant='dark'
              borderRadius={4}
              p='4px 12px'
            >
              {c}
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  )
}

export default MobileMenu
