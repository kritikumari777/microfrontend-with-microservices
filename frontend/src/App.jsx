import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/auth/Navbar"
import Dasboard from "./components/auth/Dasboard"
import Login from "./components/auth/Login"
import Home from "./components/auth/Home"
import Logout from "./components/auth/Logout"
import AuthContext from "./context/AuthContext"
import Register from "./components/auth/Register"

const App = () => {
  return (
    <AuthContext>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/dasboard" element={<Dasboard/>}/>
        <Route path="/logOut" element={<Logout/>}/>
      </Routes>
    </Router>
    </AuthContext>
  )
}

export default App