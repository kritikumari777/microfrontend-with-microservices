import { useEffect, useState } from 'react'
import { usersData } from '../constants/users.constant'
import axios from '../../../axios/axios'
import { Table } from '../../../shared/ui/Table'

const FetchUsers = () => {
    const [data, setData] = useState([])
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)
    const { listOfUser } = usersData

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

    if (loading) return <p>Loading....</p>

    if (error) return <p> Somthing Went wrong {error}</p>

    const thData = data?.user?.length ? Object.keys(data.user[0]) : []
    const tdData = data?.user?.length ? data?.user?.map((item, i) => Object.values(item)) : []

    return (
        <div className='flex-1'>
            <h5>{listOfUser}</h5>
            <div className='overflow-scroll w-100 h-80 p-5'>
                <Table thData={thData} tdData={tdData} />
            </div>
        </div>
    )
}

export default FetchUsers