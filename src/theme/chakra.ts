import { defineStyleConfig, extendTheme } from "@chakra-ui/react"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const Button = defineStyleConfig({
  sizes: {
    sm: {
      px: "35px",
      py: "6px",
      fontSize: "16px",
      fontWeight: 400,
    },
    md: {
      px: "40px",
      py: "10px",
      fontSize: "18px",
      fontWeight: 400,
    },
    lg: {
      px: "50px",
      py: "14px",
      fontSize: "20px",
      fontWeight: 400,
    },
  },

  variants: {
    base: {
      bgColor: "brand.1",
      color: "#fff",

      _hover: { bgColor: "brand.2" },
    },
    dark: {
      bgColor: "neutral.800",
      color: "#fff",
    },

    transparent: {
      bg: "transparent",
      color: "#000",
      _hover: { bg: "transparent" },
    },
  },

  baseStyle: {
    borderRadius: 4,
  },

  defaultProps: {
    size: "md",
  },
})

const Heading = defineStyleConfig({
  sizes: {
    sm: {
      fontSize: "20px",
    },
    md: {
      fontSize: "24px",
    },
    lg: {
      fontSize: "32px",
    },
  },

  baseStyle: {
    fontWeight: 400,
  },

  defaultProps: {
    size: "lg",
  },
})

const Input = defineStyleConfig({
  variants: {
    base: {
      bg: "neutral.100",
      borderRadius: 4,
    },
  },
})

export const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
  },
  colors: {
    brand: {
      1: "#03C988",
      2: "#2ABB7F",
    },
    orange: {
      1: "#ED8A19",
    },
    neutral: {
      100: "#F7F8F9",
      200: "#F1F2F4",
      300: "#DCDFE4",
      400: "#B3B9C4",
      "400A": "#091E42",
      800: "#44546F",
      1000: "#10242E",
    },
    dark: {
      1: "#092635",
    },
  },
  components: {
    Button,
    Heading,
    Input,
  },
})
