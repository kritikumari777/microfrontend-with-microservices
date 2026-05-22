import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

    const { user } = useContext(AuthContext)

    if(user === "null") return <p>loding...</p>
    return (
        <nav className="bg-yellow-950 py-3 mb-5">
            <ol className="flex justify-around">
                {!user ?
                    (<div className="flex justify-between gap-20">
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </div>) :
                    (
                    <div className="">
                        {user.role === 'Customer' &&
                            (<li>
                                <Link to="/">Home</Link>
                            </li>)
                        }
                        {user.role === 'Admin' && (
                            <li>
                                <Link to="/admin-dashboard">Dashboard</Link>
                            </li>
                        )}
                         (<li>
                                <Link to="/logout">Logout</Link>
                            </li>)
                    </div>
                    )
                }
            </ol>
        </nav>
    )
}

export default Navbar