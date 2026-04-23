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
            const response = await axios.get(`/get-me`)
            setUser(response.data?.user)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchLogin = async (userCredential, navigate) => {
        setLoading(true)
        try {
            const response = await axios.post(`/login`, userCredential)
            const { accessToken } = response.data;
            // refraceToken auto set and send from cookies - need to add "withCredentials: true" with baseURL
            localStorage.setItem("access", accessToken)
            axios.defaults.headers.common[`Authorization`] = `Bearer ${accessToken}`
            navigate("/")
            await fetchUser(accessToken)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchRegister = async (userCredential, navigate) => {
        setLoading(true)
        try {
            const response = await axios.post(`/register`, userCredential)
            const { accessToken } = response.data
            // refraceToken auto set and send from cookies - need to add "withCredentials: true" with baseURL

            localStorage.setItem("access", accessToken)
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            navigate("/")
            await fetchUser(accessToken)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const fetchLogout = async (navigate) => {
        setLoading(true)
        try {
            const responce = await axios.get(`/logout`)
            localStorage.removeItem('access')
            delete axios.defaults.headers.common['Authorization']
            setUser(null)
            navigate("/login")
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const fetchLogoutAll = async (navigator) => {
        setLoading(true)
        try{

            const response = axios.get("/logout-all")
            localStorage.removeItem("access")
            delete axios.defaults.headers.common['Authentication']
            setUser(null)
            navigator("/login")
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const fetchRefrace = async () => {
        setLoading(true)
        try {
            const response = await axios.get('/refresh-token')
            const { accessToken } = response.data
            localStorage.setItem('access', accessToken)
            axios.defaults.headers.common[`Authorization`] = `Bearer ${accessToken}`
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, fetchRegister, fetchLogin, fetchLogout,fetchLogoutAll, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}