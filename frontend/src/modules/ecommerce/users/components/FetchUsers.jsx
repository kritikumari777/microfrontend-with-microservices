import React, { useEffect, useState } from 'react'
import { Header } from '../../../../shared/ui/Header'
import { Table } from '../../../../shared/ui/Table'
import { data } from 'react-router-dom'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { usersData } from '../constants/users.constant'
import { baseURL } from '../../../../axios/axios'
import axios from '../../../../axios/axios'

const FetchUsers = () => {
    const [data, setData] = useState([])
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)
    const { header } = usersData

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const res = await axios.get(`/get-users`)
                setData(res?.data)
            } catch (error) {
                console.log(error)
                setError(error)
            } finally {
                setLoding(false)
            }
        }

        fetchUser()
    }, [])

    
     if(loading) return <p>Loading....</p>

     if(error) return <p> Somthing Went wrong {error}</p>

    const thData = data?.user?.length ? Object.keys(data.user[0]) : []
    const tdData = data?.user?.length ? data?.user?.map((item, i) => Object.values(item)) : []

   
    return (
        <div>
            <Header text={header} />
            <div className='overflow-scroll w-95 h-80 m-5'>
            <Table thData={thData} tdData={tdData} />
            </div>
        </div>
    )
}

export default FetchUsers