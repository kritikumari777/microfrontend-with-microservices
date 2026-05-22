import { useContext } from "react"
import { Header } from "../../shared/ui/Header"
import { AuthContext } from "../../context/AuthContext"
import { dashboard } from "../auth/constant/constant"

const Dashboard = () => {

  const { user } = useContext(AuthContext)
  return (
    <div>
      <Header text={dashboard?.header} />
      <p>{dashboard?.text}</p>
      {user && <div>{user?.username} --- {user?.email}</div>}
    </div>
  )
}

export default Dashboard