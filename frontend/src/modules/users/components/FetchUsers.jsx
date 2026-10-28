import { useEffect, useState } from 'react'
import { usersData } from '../constants/users.constant'
import axios from '../../../axios/axios'
import { Table } from '../../../shared/ui/Table'

const FetchUsers = ({registerUser}) => {
    const [data, setData] = useState([])
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)
    const { listOfUser, columns } = usersData

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
    }, [registerUser])

    if (loading) return <p>Loading....</p>
    if (error) return <p> Somthing Went wrong {error}</p>

    return (
        <div className='flex-1'>
            <h5>{listOfUser}</h5>
            <div className='overflow-scroll w-100 h-80 p-5'>
                <Table
                    columns={columns}
                    data={data?.user}
                //   isCrud={true}
                //   onDelete={onDelete}
                //   onEdit={onEdit}
                //   isDeletPending={isDeletPending}
                />
            </div>
        </div>
    )
}

export default FetchUsers