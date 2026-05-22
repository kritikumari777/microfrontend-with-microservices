import { FaBox, FaCog, FaHome, FaShoppingCart, FaSignOutAlt, FaTable, FaTruck, FaUber, FaUsers } from "react-icons/fa"
const menuItems = [
    { name: "Dashboard", path: "/admin-dashboard", icon: <FaHome />, isParent: false},
    { name: "Categorries", path: "/admin-dashboard/categories", icon: <FaTable />, isParent: true },
    { name: "Products", path: "/admin-dashboard/Products", icon: <FaBox />, isParent: true},
    { name: "Cart", path: "/admin-dashboard/cart", icon: <FaTruck />, isParent: true },
    { name: "Orders", path: "/admin-dashboard/orders", icon: <FaShoppingCart />, isParent: true },
    { name: "Users", path: "/admin-dashboard/users", icon: <FaUsers />, isParent: true},
    { name: "Profile", path: "/admin-dashboard/profile", icon: <FaCog />, isParent: true },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt />, isParent: true },
]

export {
    menuItems
}