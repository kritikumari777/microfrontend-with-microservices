import {Button} from '../../../shared/ui/Button'
import { Header } from '../../../shared/ui/Header'
import { logout } from '../constant/constant'

const Logout = () => {

    const HandleLogout = () => {
        console.log("Logout")
    }

  return (
    <div>
        <Header text={logout?.header}/>
        <Button type={logout?.text} text={logout?.btnText} className='btn btn-danger' onClick={HandleLogout}/>
    </div>
  )
}

export default Logout