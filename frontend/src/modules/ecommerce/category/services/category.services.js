import axios from "axios"
import { useState } from "react"

const createCategory = async ({ setLoading, setData, setError }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    setLoading(true)

    try {
        const res = await fetch(`${baseURL}/category`, {
            method: "POST",
            headers: {
                "context-type": "application/json",
            },
        })
        setData(res?.data)
    } catch (err) {
        setError(true)
    } finally {
        setLoading(false)
    }

    return {}
}