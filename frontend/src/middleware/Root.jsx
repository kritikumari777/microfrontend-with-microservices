import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "../modules/auth/components/Register"
import { AuthProvider } from "../context/AuthContext"
import ProtectedRoute from "../middleware/ProtectedRoute"
import Home from "../modules/customer/Home"
import Navbar from "../modules/navbar/Navbar"
import Login from "../modules/auth/components/Login"
import Logout from "../modules/auth/components/Logout"
import Admin from "../modules/admin"
import Dashboard from "../modules/admin/Dashboard"
import CreateCategory from "../modules/ecommerce/category/components/CreateCategory"
import CreateProduct from "../modules/ecommerce/products/components/CreateProduct"
import FetchCart from "../modules/ecommerce/cart/components/FetchCart"
import FetchOrders from "../modules/ecommerce/orders/components/FetchOrders"
import FetchUsers from "../modules/ecommerce/users/components/FetchUsers"


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
          <Route path='categories' element={<CreateCategory/>}/>
          <Route path='products' element={<CreateProduct/>}/>
          <Route path='cart' element={<FetchCart/>}/>
          <Route path='orders' element={<FetchOrders/>}/>
          <Route path='users' element={<FetchUsers/>}/>
          <Route path='profile' element={<CreateProduct/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default Root