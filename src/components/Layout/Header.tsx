import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { PiGitlabLogoSimpleFill } from "react-icons/pi"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hook"
import { fetchCategories } from "../../store/categorySlice"
import MobileMenu from "./MobileMenu"
import { fetchProductsByCategory } from "../../store/productSlice"
import { filterProducts, setQuery } from "../../store/searchProductSlice"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  // const [searchInput, setSearchInput] = useState<string>("")
  const screenWidth = window.innerWidth
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(
      fetchProductsByCategory({
        categoryName: selectedCategory,
        limit: 0,
        sort: "asc"
      })
    )
  }, [selectedCategory])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setQuery(e.target.value))
    dispatch(filterProducts())
  }

  const categories = useAppSelector(state => state.categories.categories)
  const cart = useAppSelector(state => state.cart.cart)
  const query = useAppSelector(state => state.searchProducts.query)

  return (
    <>
      <Box h='80px' bg='dark.1'>
        <Container display='flex' gap={18} justifyContent='center' alignItems='center' h='100%' maxW='1140px'>
          <Box>
            <Link to='/'>
              <PiGitlabLogoSimpleFill color='#03C988' size='30px' />
            </Link>
          </Box>
          {screenWidth >= 640 && (
            <Menu>
              <MenuButton as={Button} pl={4} variant='dark'>
                Categories
              </MenuButton>
              <MenuList>
                {categories.map((c, i) => (
                  <Link key={i} to={`/category/${c}`}>
                    <MenuItem onClick={(e: any) => setSelectedCategory(e.target.textContent)} key={i}>
                      {c}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          )}

          <Input placeholder='Search' value={query} onChange={handleSearch} variant='base' />

          <Button position='relative' variant='transparent' px={0}>
            {cart.products.length > 0 && (
              <Text fontWeight={500} color='#fff' position='absolute' top='0' right='0'>
                {cart.products.length}
              </Text>
            )}
            <Link to='/cart'>
              <FaShoppingCart color='#2ABB7F' size='30px' />
            </Link>
          </Button>
          {screenWidth < 640 && (
            <Button variant='dark' p={0} onClick={() => setIsMenuOpen(prev => !prev)}>
              <HamburgerIcon />
            </Button>
          )}
        </Container>
      </Box>
      {screenWidth <= 640 && isMenuOpen && (
        <MobileMenu
          setSelectedCategory={setSelectedCategory}
          setIsMenuOpen={setIsMenuOpen}
          categories={categories}
        />
      )}
    </>
  )
}

export default Header
