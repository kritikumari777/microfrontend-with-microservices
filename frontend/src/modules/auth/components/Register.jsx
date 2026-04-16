import { useState } from "react"
import { registerFields } from "../constant/constant"
import { Header } from "../../../shared/ui/Header"
import { FormComp } from "../../../shared/ui/Form"

const Register = () => {

    const [registerUser, setRegisterUser] = useState({userName: "", email: "", password: ""})
     const {header, fields, btnFields} = registerFields


    const handleSubmit= () => {
        console.log(user)
    }

    return (
        <div className='card pt-10 w-80 mx-auto py-3'>
            <Header text={header}/>
            <FormComp data={fields} value={registerUser?.[fields?.name]} btnType={btnFields?.btnType} btnText={btnFields?.btnText} onChange={(e) => {onChangeObj(e, setRegisterUser)}} onClick={handleSubmit} />  
        </div>
    )
}

export default Register