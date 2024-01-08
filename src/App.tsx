import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import CategoryPage from "./pages/CategoryPage"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import Cart from "./pages/Cart"

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path='/'>
        <Route element={<Home />} path='/' />
        <Route element={<CategoryPage />} path='/category/:categoryName' />
        <Route element={<ProductPage />} path='/:productId' />
        <Route element={<Cart />} path='/cart' />
      </Route>
    </Routes>
  )
}

export default App
