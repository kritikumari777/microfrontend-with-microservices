import { useContext, useState } from 'react'
import { loginFields } from "../constant/constant"
import { Header } from '../../../shared/ui/Header'
import {FormComp} from "../../../shared/ui/Form"
import {AuthContext} from '../../../context/AuthContext'
import { onChangeObj } from '../../../shared/action/EventAct'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [userCredential, setUserCredential] = useState({ email: "", password: "" })
    const {fetchLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const {header, fields, btnFields} = loginFields

    const handleSubmit = (e) => {
       e.preventDefault()
       fetchLogin(userCredential, navigate)

    }

    return (
        <div className='card w-80 mx-auto py-3'>
            <Header text={header}/>
            <FormComp data={fields} value={userCredential?.[fields?.name]} btnType={btnFields?.btnType} btnText={btnFields?.btnText} onChange={(e) => onChangeObj(e, setUserCredential)} onSubmit={handleSubmit} />  
        </div>
    )
}

export default Login
