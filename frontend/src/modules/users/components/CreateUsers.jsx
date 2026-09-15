import { usersData } from "../constants/users.constant"
import axios from "../../../axios/axios"
import { FormComp } from "../../../shared/ui/Form"
import { ToastContainer } from "react-toastify"
import { onChangeObj } from "../../../shared/action/EventAct"
import { useState } from "react"

const CreateUsers = (props) => {

  const [registerUser, setRegisterUser] = useState({ username: "", email: "", password: "", role: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { fields, title, btnFields } = usersData

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/register`, registerUser)
      console.log(res)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <p>Loading....</p>

  if (error) return <p> Somthing Went wrong {error}</p>

  return (
    <>
      <div className="flex-1">
        <h5>{title}</h5>
        <FormComp data={fields} formData={registerUser}
          btnType={btnFields?.btnType} btnText={loading ? "Loading" : btnFields?.btnText}
          onChange={(e) => onChangeObj(e, setRegisterUser)}
          onSubmit={onSubmit}
          isCancle={false}
          {...props}
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}
export default CreateUsers