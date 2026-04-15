import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./modules/auth/components/Navbar"
import Dasboard from "./modules/auth/components/Dasboard"
import Login from "./modules/auth/components/Login"
import Home from "./modules/auth/components/Home"
import Logout from "./modules/auth/components/Logout"
import AuthContext from "./context/AuthContext"
import Register from "./modules/auth/components/Register"

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