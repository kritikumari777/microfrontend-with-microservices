import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

const Navbar = () => {

    const { user } = useContext(AuthContext)

    if(user === "null") return <p>loding...</p>
    return (
        <nav className="bg-yellow-950 mb-5 py-3">
            <ol className="flex justify-around">
                {!user ?
                    (<>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </>) :
                    (
                    <>
                        {user.role === 'Customer' &&
                            (<li>
                                <Link to="/">Home</Link>
                            </li>)
                        }
                        {user.role === 'Admin' && (
                            <li>
                                <Link to="/admin/dashboard">Dashboard</Link>
                            </li>
                        )}
                         (<li>
                                <Link to="/logout">Logout</Link>
                            </li>)
                    </>
                    )
                }
            </ol>
        </nav>
    )
}

export default Navbar