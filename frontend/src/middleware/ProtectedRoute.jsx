import React, { createContext, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ children, roles }) => {

    const { user, loading } = useContext(AuthContext)

    const getDefaultRoute = (role) => {
        switch (role) {
            case "Admin": return '/admin-dashboard'
            case "Customer": return '/'
            default: return "/login"
        }
    }
    // While chaking auth
    if (loading) {
        return <p>Loading...</p>
    }

    // User not logged in
    if (!user) {
        return <Navigate to='/login' replace />
    }

    // User logged in but role not allowed
    if (roles && !roles.includes(user.role)) {
        return (
            <Navigate
                to={getDefaultRoute(user.role)}
                replace
            />
        )
    }

    return children
}


export default ProtectedRoute 
