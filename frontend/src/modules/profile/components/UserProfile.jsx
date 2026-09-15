import { Header } from '../../../shared/ui/Header'
import profileData from '../constant/profile.constnat'

const UserProfile = (props) => {
    const { data, loading, error } = props
    const { userProfile } = profileData

    if (loading) return <p>Loading....</p>

    if (error) return <p> Somthing Went wrong {error}</p>

    return (
        <div className=''>
            <Header text={userProfile} />
                <div >
                    <div className="d">{data?.user?.username}</div>
                    <div className="d">{data?.user?.email}</div>
                    <div className="d">{data?.user?.role}</div>
                </div>
        </div>
    )
}

export default UserProfile