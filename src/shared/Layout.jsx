import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <div className="sticky top-full">
            <Footer />
        </div>
    </div>
  )
}

export default Layout