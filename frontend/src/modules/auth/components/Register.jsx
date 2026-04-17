import { useContext, useState } from "react"
import { registerFields } from "../constant/constant"
import { Header } from "../../../shared/ui/Header"
import { FormComp } from "../../../shared/ui/Form"
import { AuthContext } from "../../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { onChangeObj } from "../../../shared/action/EventAct"

const Register = () => {

    const [registerUser, setRegisterUser] = useState({username: "", email: "", password: ""})
    const {fetchRegister} = useContext(AuthContext)
    const navigate = useNavigate()
     const {header, fields, btnFields} = registerFields


    const handleSubmit= (e) => {
        e.preventDefault()
        fetchRegister(registerUser)
        navigate("/")
    }

    return (
        <div className='card pt-10 w-80 mx-auto py-3'>
            <Header text={header}/>
            <FormComp data={fields} value={registerUser?.[fields?.name]} btnType={btnFields?.btnType} btnText={btnFields?.btnText} onChange={(e) => onChangeObj(e, setRegisterUser)} onSubmit={handleSubmit} />  
        </div>
    )
}

export default Register