import { useContext } from 'react'
import {Button} from '../../../shared/ui/Button'
import { Header } from '../../../shared/ui/Header'
import { logout } from '../constant/constant'
import {AuthContext} from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

  const {fetchLogout} = useContext(AuthContext)
  const navigate = useNavigate()

    const HandleLogout = () => {
        fetchLogout()
        navigate("/login")
    }

  return (
    <div>
        <Header text={logout?.header}/>
        <Button type={logout?.text} text={logout?.btnText} className='btn btn-danger' onClick={HandleLogout}/>
    </div>
  )
}

export default Logout