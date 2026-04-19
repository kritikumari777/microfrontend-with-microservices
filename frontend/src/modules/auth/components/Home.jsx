import { useContext } from "react"
import { Header } from "../../../shared/ui/Header"
import { home } from "../constant/constant"
import { AuthContext } from "../../../context/AuthContext"

const Home = () => {

  const {user} = useContext(AuthContext)
  return (
    <div>
      <Header text={home?.header}/>
      <p>{home?.text}</p>
      {user && <div>{user?.username} --- {user?.email}</div>}
    </div>
  )
}

export default Home