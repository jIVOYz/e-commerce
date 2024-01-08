import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface CategoryState {
  categories: string[]
  loading: boolean
  error: string | null
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
}

export const fetchCategories = createAsyncThunk<string[], undefined, { rejectValue: string }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    const res = await fetch("https://fakestoreapi.com/products/categories")

    if (!res.ok) {
      return rejectWithValue("Server failed")
    }

    const data = await res.json()
    return data
  }
)

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  },
})

export default categorySlice.reducer
