import axios from "axios"
import { useState } from "react"
import { baseURL } from "../../axios/axios"

const useCreateApi = (endpoint, body) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const url = `${baseURL}${endpoint}`

    const creatApi = async () => {
        setLoading(true)
        try {
            const res = await axios.post(url, body,)
            setData(res?.data)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    // apiCall()

    return { loading, error, data, creatApi }
}


const useGetApi = (endpoint, header) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const url = `${baseURL}${endpoint}`


    const getApi = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url, header)
            setData(res.data)

        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return {loading, data, error, getApi}
}


export {
    useCreateApi,
    useGetApi
}