import React from 'react'
import { menuItems } from '../constants/admin.constants'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div>
      <div>
        <span>Fruits Market</span>
        <span>FM</span>
      </div>
    <div className='px-5'>
     {menuItems.map((item, i) => (
      <li key={i} className='' >
        <NavLink
        end={!item?.isParent}
        className={({isActive}) => (isActive && "text-shadow-amber-400") + "text-amber-300 flex justify-between"}
        to={item.path}>
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </NavLink>
      </li>
     ))}
    </div>
    </div>
  )
}

export default Sidebar