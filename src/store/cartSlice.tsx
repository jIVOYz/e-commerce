import { createSlice } from "@reduxjs/toolkit"
import { Cart } from "../utils/models"

interface cartState {
  cart: Cart
}

const initialState: cartState = {
  cart: {
    products: [],
  } as Cart,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      if (Array.isArray(state.cart.products)) {
        state.cart.products.push({ product: action.payload, amount: 1 })
      }
    },
    removeProductFromCart: (state, action) => {
      if (Array.isArray(state.cart.products)) {
        state.cart.products = state.cart.products.filter(item => item.product.id !== action.payload)
      }
    },

    incrementAmount: (state, action) => {
      const { id } = action.payload
      const product = state.cart.products.find(item => item.product.id === id)
      product!.amount += 1
    },
    decrementAmount: (state, action) => {
      const { id } = action.payload
      const product = state.cart.products.find(item => item.product.id === id)
      if (product!.amount === 1) return
      product!.amount -= 1
    },
  },
})

export const { addProductToCart, removeProductFromCart, incrementAmount, decrementAmount } = cartSlice.actions
export default cartSlice.reducer
