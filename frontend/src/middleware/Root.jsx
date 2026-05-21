import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../modules/auth/components/Navbar"
import Dashboard from "../modules/auth/components/Dashboard"
import Login from "../modules/auth/components/Login"
import Home from "../modules/auth/components/Home"
import Logout from "../modules/auth/components/Logout"
import Register from "../modules/auth/components/Register"
import { AuthProvider } from "../context/AuthContext"
import ProtectedRoute from "../middleware/ProtectedRoute"


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
          <Route path="/dashboard" element={
            <ProtectedRoute roles={['Admin']}>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
  )
}

export default Root