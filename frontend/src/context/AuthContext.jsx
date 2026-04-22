import { createContext, useState, useEffect } from "react";
import axios from "../axios/axios";
import { useRoutes } from "react-router-dom";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('access')
        if (token) {
            axios.defaults.headers.common[`Authorization`] = `Bearer ${token}`
            fetchUser(token)
        }else{
            setLoading(false)
        }
    }, [])

    const fetchUser = async (token) => {
        try {
            const response = await axios.get(`/get-me`, {}, {withCredentials: true})
            setUser(response.data?.user)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchLogin = async (userCredential) => {
        try {
            const response = await axios.post(`/login`, userCredential, {withCredentials: true})
            const { accessToken, refraceToken } = response.data;

            localStorage.setItem("access", accessToken)
            localStorage.setItem("refrace", refraceToken)

            axios.defaults.headers.common[`Authorization`] = `Bearer ${accessToken}`
            await fetchUser(accessToken)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchRegister = async (userCredential) => {
        try {
            const response = await axios.post(`/register`, userCredential, {withCredentials: true})
            const { accessToken, refraceToken } = response.data

            localStorage.setItem("access", accessToken)
            localStorage.setItem("refrace", refraceToken)

            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            
            await fetchUser(accessToken)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const fetchLogout = async () => {
        try {
            const responce = await axios.get(`/logout`, {}, {withCredentials: true})

            localStorage.removeItem('access')
            localStorage.removeItem('refrace')
            delete axios.defaults.headers.common['Authorization']
            setUser(null)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchRefrace = async () => {
        try {
            const response = await axios.get('/refresh-token',{}, {withCredentials: true})
            const { accessToken } = response.data

            localStorage.setItem('access', accessToken)

            axios.defaults.headers.common[`Authorization`] = `Bearer ${accessToken}`
            //   await fetchUser(accessToken)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, fetchRegister, fetchLogin, fetchLogout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}