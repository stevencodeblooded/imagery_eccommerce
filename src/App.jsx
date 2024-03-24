import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomeScreen from '../src/container/HomeScreen'
import PresetsScreen from '../src/container/PresetsScreen'
import AccountScreen from '../src/container/AccountScreen'
import CartScreen from '../src/container/CartScreen'
import Layout from "./shared/Layout"
import SingleProductScreen from '../src/container/SingleProductScreen'
import LoginScreen from "./container/LoginScreen"
import UserSettingsScreen from "./container/UserSettingsScreen"
import NewProductScreen from "./container/NewProductScreen"
import SalesAnalyticsScreen from "./container/SalesAnalyticsScreen"
import SalesAnalyticsScreenPerProduct from "./container/SalesAnalyticsScreenPerProduct"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<HomeScreen />} />
        <Route path="presets" element={<PresetsScreen />} />
        <Route path="presets/:id" element={<SingleProductScreen />} />
        <Route path="account" element={<AccountScreen />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="user-settings" element={<UserSettingsScreen />} />
        <Route path="new-product" element={<NewProductScreen />} />
        <Route path="sales-analytics" element={<SalesAnalyticsScreen />} />
        <Route path="sales-analytics/:id" element={<SalesAnalyticsScreenPerProduct />} />
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
