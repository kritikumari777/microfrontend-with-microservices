import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

const Admin = () => {

//   const { user } = useContext(AuthContext)
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-amber-950 text-amber-300">
        <Sidebar/>
        </div>
        <div className="flex-1 bg-amber-50 min-h-screen">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Admin