import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "../modules/auth/components/Register"
import { AuthProvider } from "../context/AuthContext"
import ProtectedRoute from "../middleware/ProtectedRoute"
import Home from "../modules/customer/Home"
import Navbar from "../modules/navbar/Navbar"
import Login from "../modules/auth/components/Login"
import Logout from "../modules/auth/components/Logout"
import Category from "../modules/ecommerce/category/components/Category"
import Admin from "../modules/admin"
import Products from "../modules/ecommerce/products/components/Products"
import Orders from "../modules/ecommerce/orders/components/Orders"
import Cart from "../modules/ecommerce/cart/components/Cart"
import Dashboard from "../modules/admin/Dashboard"


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
          <Route path='products' element={<Products/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='users' element={<Category/>}/>
          <Route path='profile' element={<Category/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Root