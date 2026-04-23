import { useContext } from 'react'
import {Button} from '../../../shared/ui/Button'
import { Header } from '../../../shared/ui/Header'
import { logout } from '../constant/constant'
import {AuthContext} from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

  const {fetchLogout, fetchLogoutAll} = useContext(AuthContext)
  const navigate = useNavigate()

    const HandleLogout = () => {
        fetchLogout(navigate)
    }
    const HandleLogoutAll = () => {
        fetchLogoutAll(navigate)
    }

  return (
    <div>
        <Header text={logout?.header}/>
        <Button type={logout?.type} text={logout?.logoutBtnText} className='btn btn-danger' onClick={HandleLogout}/>
        <div>
        <Button type={logout?.type} text={logout?.logoutAllBtnText} className='btn btn-danger' onClick={HandleLogoutAll}/>
        </div>
    </div>
  )
}

export default Logout