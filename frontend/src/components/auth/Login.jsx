import React, { useState } from 'react'

const Login = () => {

    const [userCredential, setUserCredential] = useState({ email: "", passward: "" })

    const handleChange = (e) => {
        const [name, value] = e.target
        setUserCredential((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userCredential)

    }

    return (
        <div className='card w-80 mx-auto'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='card-body'>
                <div className='d-flex flex-col'>
                    <label className='d-flex justify-start' htmlFor='userName'>Email Id</label>
                    <input name="userName" type="email" placeholder='Please enter email' value={userCredential?.email} onChange={handleChange} />
                </div>

                <div className='d-flex flex-col'>
                    <label className='d-flex justify-start' htmlFor='password'>Password</label>
                    <input name="password" type="password" placeholder='Please enter Password' value={userCredential?.passward} onChange={handleChange} />
                </div>

                <button className='btn btn-success' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
