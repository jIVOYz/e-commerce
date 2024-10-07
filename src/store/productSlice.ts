import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product } from "../utils/models"

interface ProductState {
  list: Product[]
  product: Product | null
  isLoading: boolean
  error: string | null
}

const initialState: ProductState = {
  list: [],
  product: null,
  isLoading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk<
  Product[],
  { limit?: number },
  { rejectValue: string }
>(
  "products/fetchProductsList",
  async (params, { rejectWithValue }) => {
    const { limit } = params || { limit: 0, sort: "asc" }

    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    if (!res.ok) {
      return rejectWithValue("Server error")
    }
    const data = await res.json()
    return data
  },
)

export const fetchProductsByCategory = createAsyncThunk<
  Product[],
  { categoryName: string; limit?: number; sort?: string},
  { rejectValue: string }
>(
  "products/fetchProductsByCategory",
  async (
    params,
    { rejectWithValue },
  ) => {
    const { categoryName, limit, sort } = params || { limit: 0, sort: "asc" }
    const categoryNameWithoutSpaces = categoryName.replace(" ", "%20")

    const res = await fetch(
      `https://fakestoreapi.com/products/category/${categoryNameWithoutSpaces}?sort=${sort}&limit=${limit}`,
    )
    if (!res.ok) {
      return rejectWithValue("Server error")
    }
    const data = await res.json()
    return data
  },
)

export const getSingleProduct = createAsyncThunk<
  Product,
  string | undefined,
  { rejectValue: string }
>("products/getSingleProduct", async (productId, { rejectWithValue }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`)

  if (!res.ok) {
    return rejectWithValue("Server error")
  }
  return await res.json()
})

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.list = action.payload
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.list = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload
        state.isLoading = false
        state.error = null
      })
  },
})

export default productSlice.reducer
