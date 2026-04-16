import { createContext, useState, useEffect } from "react";
import axios from "axios"
import { baseURL } from "../axios/axios";
import { useRoutes } from "react-router-dom";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            axios.defaults.headers.commom[`Authorization`] = `Bearer ${token}`
            fetchUser(token)
        }
    }, [])

    const fetchUser = async (token) => {
      
        setLoading(true)
        try {
            const response = await axios.get(`${baseURL}/get-me`)
            console.log(response.data?.user)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchLogin = async (userCredential) => {
        setLoading(true)
        try {
            const response = await axios.post(`${baseURL}/login`, userCredential)
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

    const fetchRegister = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${baseURL}/regiser`)
            const { accessToken, refraceToken } = response.data

            localStorage.setItem(accessToken)
            localStorage.setItem(refraceToken)

            axios.defaults.headers.common['Authorization'] = `Berear ${accessToken}`
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(true)
        }
    }
    const fetchLogout = async () => {

        setLoading(true)
        try {
            // const responce = await axios.get(`${baseURL}/logout`)
            // console.log(responce.data)

            localStorage.removeItem('token')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refrace')
            delete axios.defaults.headers.common['Authorization']
            setUser(null)
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