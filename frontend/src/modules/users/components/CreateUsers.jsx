import { usersData } from "../constants/users.constant"
import { FormComp } from "../../../shared/ui/Form"
import { ToastContainer } from "react-toastify"
import { onChangeObj } from "../../../shared/action/EventAct"

const CreateUsers = (props) => {
 
  const {registerUser, setRegisterUser, loading, error, onSubmit} = props
  const {fields, title, btnFields } = usersData

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