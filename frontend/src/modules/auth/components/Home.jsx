import { Header } from "../../../shared/ui/Header"
import { home } from "../constant/constant"

const Home = () => {
  return (
    <div>
      <Header text={home?.header}/>
      <p>{home?.text}</p>
    </div>
  )
}

export default Home