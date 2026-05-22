import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../modules/auth/components/Navbar"
import Login from "../modules/auth/components/Login"
import Logout from "../modules/auth/components/Logout"
import Register from "../modules/auth/components/Register"
import { AuthProvider } from "../context/AuthContext"
import ProtectedRoute from "../middleware/ProtectedRoute"
import Home from "../modules/customer/Home"
import Dashboard from "../modules/admin/Dashboard"


const Root = () => {
  return (
       <Router>
        <Navbar />
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
          <Route path="/admin/dashboard" element={
            <ProtectedRoute roles={['Admin']}>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
  )
}

export default Root