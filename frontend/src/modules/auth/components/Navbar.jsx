import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

const Navbar = () => {

    const { user } = useContext(AuthContext)
    return (
        <nav className="bg-yellow-950 mb-5 py-3">
            <ol className="flex justify-around">
                {user ?
                    <>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </> :
                    <>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                }
            </ol>
        </nav>
    )
}

export default Navbar