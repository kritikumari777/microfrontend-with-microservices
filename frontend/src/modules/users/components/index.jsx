import { Header } from "../../../shared/ui/Header"
import FetchUsers from "./FetchUsers"
import CreateUsers from "./CreateUsers"
import { usersData } from "../constants/users.constant"

const Users = () => {
    const { header } = usersData

    return (
        <div className='justify-center items-center w-100 h-screen'>
            <Header text={header} />
            <div className="flex justify-between gap-2">
                <CreateUsers />
                <FetchUsers />
            </div>
        </div>
    )
}

export default Users