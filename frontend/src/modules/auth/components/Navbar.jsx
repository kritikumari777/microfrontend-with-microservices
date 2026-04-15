import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-yellow-950 mb-5 py-3">
            <ol className="flex justify-around">
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dasboard">Dasboard</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ol>
        </nav>
    )
}

export default Navbar