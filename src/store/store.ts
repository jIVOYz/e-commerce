import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./categorySlice"
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"
import searchProductReducer from "./searchProductSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    searchProducts: searchProductReducer,
    categories: categoryReducer,
    cart: cartReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
