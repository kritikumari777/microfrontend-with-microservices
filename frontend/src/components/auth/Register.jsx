import { useState } from "react"

const Register = () => {

    const [user, setUser] = useState({userName: "", email: "", password: ""})

    const handleChange = (e) => {
        const {name, value} = e.target

        setUser((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit= () => {
        console.log(user)
    }
  return (
    <div className="card">
        <h1>Register</h1>
        <form className="card-body" onSubmit={handleSubmit} >
            <div >
            <label htmlFor='userName'>User Name</label>
            <input type="text" name="userName" value={user?.userName} placeholder="Please Enter the name" onChange={handleChange}/>
            </div>

            <div>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" value={user?.email} placeholder="Please Enter the email" onChange={handleChange}/>
            </div>

            <div>
            <label htmlFor='userName'>Password</label>
            <input type="text" name="password" value={user?.password} placeholder="Please Enter the password" onChange={handleChange}/>
            </div>
            <button className="btn btn-primary" type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register