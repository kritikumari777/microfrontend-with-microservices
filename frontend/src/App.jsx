import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./modules/auth/components/Navbar"
import Dashboard from "./modules/auth/components/Dashboard"
import Login from "./modules/auth/components/Login"
import Home from "./modules/auth/components/Home"
import Logout from "./modules/auth/components/Logout"
import Register from "./modules/auth/components/Register"
import PrivateRoute from "./middleware/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/dasboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App