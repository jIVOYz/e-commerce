import { Box, Button, Flex } from "@chakra-ui/react"
import React from "react"
// import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

interface Props {
  setIsMenuOpen: (value: boolean) => void
  setSelectedCategory: (value: string) => void
  categories: string[]
}

const MobileMenu = ({
  setIsMenuOpen,
  categories,
  setSelectedCategory,
}: Props) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLButtonElement
    setIsMenuOpen(false)
    setSelectedCategory(target.textContent!)
  }

  return (
    <Box bg="dark.1">
      <Flex wrap="wrap" gap={2} p={2}>
        {categories.map((c, i) => (
          <Link key={i} to={`/category/${c}`}>
            <Button
              onClick={handleClick}
              variant="dark"
              borderRadius={4}
              p="4px 12px"
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
