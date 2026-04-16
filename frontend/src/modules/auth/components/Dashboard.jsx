import { Header } from "../../../shared/ui/Header"
import { dasboard } from "../constant/constant"

const Dashboard = () => {
  return (
    <div>
      <Header text={dasboard?.header}/>
      <p>{dasboard?.text}</p>
    </div>
  )
}

export default Dashboard