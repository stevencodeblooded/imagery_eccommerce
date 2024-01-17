import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomeScreen from '../src/container/HomeScreen'
import PresetsScreen from '../src/container/PresetsScreen'
import AccountScreen from '../src/container/AccountScreen'
import CartScreen from '../src/container/CartScreen'
import Layout from "./shared/Layout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<HomeScreen />} />
        <Route path="presets" element={<PresetsScreen />} />
        <Route path="account" element={<AccountScreen />} />
        <Route path="cart" element={<CartScreen />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
