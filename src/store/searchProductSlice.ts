import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../utils/models"

interface searchProductState {
  query: string
  initialData: Product[]
  filteredData: Product[]
}

const initialState: searchProductState = {
  query: "",
  initialData: [],
  filteredData: [],
}

const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    setQuery(state: searchProductState, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setInitialData(state: searchProductState, action: PayloadAction<Product[]>) {
      state.initialData = action.payload
    },
    setFilteredData(state: searchProductState, action: PayloadAction<Product[]>) {
      state.filteredData = action.payload
    },
    filterProducts(state: searchProductState) {
      if (state.query) {
        state.filteredData = state.initialData.filter((item) =>
          item.title.toLowerCase().includes(state.query.toLowerCase()),
        )
      } else {
        state.filteredData = state.initialData
      }
    },
  },
})

export const { setQuery, setInitialData, setFilteredData, filterProducts } = searchProductSlice.actions
export default searchProductSlice.reducer
