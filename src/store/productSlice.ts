import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../utils/models"
import { RootState } from "./store"

interface ProductState {
  products: Product[]
  loading: boolean
  error: string | null
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk<Product[], undefined, { rejectValue: string }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    const res = await fetch("https://fakestoreapi.com/products")

    if (!res.ok) {
      return rejectWithValue("Server failed")
    }

    const data = res.json()
    return data
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true
      state.error = null
    })
  },

  reducers: {
    // addProduct(state, action: PayloadAction<Product>) {
    //   state.products.push(action.payload)
    // },
    // updateProduct(state, action: PayloadAction<Product>) {
    //   state.products[action.payload.id] = action.payload
    // },
    // deleteProduct(state, action: PayloadAction<Product["id"]>) {
    //   state.products = state.products.filter(p => p.id !== action.payload)
    // },
  },
})

// export const { addProduct } = productSlice.actions
export default productSlice.reducer
