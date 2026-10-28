import { Header } from "../../../shared/ui/Header"
import FetchUsers from "./FetchUsers"
import CreateUsers from "./CreateUsers"
import { usersData } from "../constants/users.constant"
import { toast } from "react-toastify"
import axios from "../../../axios/axios"
import { useState } from "react"
import { isValidUser } from "../actions/user.action"

const Users = () => {

      let initialField = { username: "", email: "", password: "", role: "" }
  const [registerUser, setRegisterUser] = useState(initialField)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const {header} = usersData

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
        if(isValidUser(registerUser)){
            const res = await axios.post(`/register`, registerUser)
            toast(res?.data?.message)
            setRegisterUser(initialField)
              console.log("registerUser", registerUser)
        }else{
            toast("All the fields are required")
            return
        }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

    return (
        <div className='justify-center items-center w-100 h-screen'>
            <Header text={header} />
            <div className="flex justify-between gap-2">
                <CreateUsers 
                registerUser={registerUser}
                setRegisterUser={setRegisterUser}
                loading={loading}
                error={error}
                onSubmit={onSubmit}
                />
                <FetchUsers 
                registerUser={registerUser}
                />
            </div>
        </div>
    )
}

export default Users