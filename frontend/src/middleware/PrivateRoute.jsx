import React, {createContext, useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

const  PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
     
    if(loading){
        return <p>Loading</p>
    }

    if(!user){
        return <Navigate to='/login'/>
    }
    return children
}

export default PrivateRoute
