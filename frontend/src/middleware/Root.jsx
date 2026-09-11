import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "../modules/auth/components/Register"
import ProtectedRoute from "../middleware/ProtectedRoute"
import Home from "../modules/customer/Home"
import Navbar from "../modules/navbar/Navbar"
import Login from "../modules/auth/components/Login"
import Logout from "../modules/auth/components/Logout"
import Category from "../modules/ecommerce/category/components"
import FetchCart from "../modules/ecommerce/cart/components/FetchCart"
import FetchUsers from "../modules/ecommerce/users/components/FetchUsers"
import Product from "../modules/ecommerce/products/components"
import Supplier from "../modules/ecommerce/supplier/components"
import Admin from "../modules/admin/components/Admin"
import Dashboard from "../modules/admin/components/Dashboard"
import Orders from "../modules/ecommerce/orders/components"

const Root = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>

        {/* Public routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* customer route */}
        <Route path="/" element={
          <ProtectedRoute roles={['Customer']}>
            <Home />
          </ProtectedRoute>
        } />

        {/* Admin Route */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute roles={['Admin']}>
            <Admin/>
          </ProtectedRoute>
        } >
          <Route index element={<Dashboard/>} />
          <Route path='categories' element={<Category/>}/>
          <Route path='products' element={<Product/>}/>
          <Route path='supplier' element={<Supplier/>}/>
          <Route path='cart' element={<FetchCart/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='users' element={<FetchUsers/>}/>
          <Route path='profile' element={<Product/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Root