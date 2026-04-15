import { useState } from 'react'
import { loginFields } from "../constant/constant"
import { OnChangeObj } from '../../../shared/action/OnChangeAct'
import { Header } from '../../../shared/ui/Header'
import {FormComp} from "../../../shared/ui/Form"
const Login = () => {

    const [userCredential, setUserCredential] = useState({ email: "", passward: "" })

    const {header, fields, btnFields} = loginFields

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userCredential)

    }

    console.log("first", btnFields?.btnType)

    return (
        <div className='card w-80 mx-auto py-3'>
            <Header text={header}/>
            <FormComp data={fields} value={userCredential?.[fields?.name]} btnType={btnFields?.btnType} btnText={btnFields?.btnText} onChange={(e) => {OnChangeObj(e, setUserCredential)}} onClick={handleSubmit} />  
        </div>
    )
}

export default Login
