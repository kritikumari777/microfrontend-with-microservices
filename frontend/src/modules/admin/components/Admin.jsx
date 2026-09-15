import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Admin = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-amber-950 text-amber-300">
          <Sidebar />
        </div>
        <div className="flex-1 min-h-screen  w-[76%] h-100">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin