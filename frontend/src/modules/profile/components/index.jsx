import { useEffect, useState } from 'react'
import axios from '../../../axios/axios'
import UserProfile from './UserProfile'

const Profile = () => {
    const [data, setData] = useState([])
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const res = await axios.get(`/get-me`)
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

    return (
        <div className=''>
         <UserProfile data={data} loading={loading} error={error}/>
        </div>
    )
}

export default Profile