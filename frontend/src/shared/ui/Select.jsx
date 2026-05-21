import React from 'react'

const Select = ({label, name, value, roles, onChange}) => {
  return (
    <div>
    <label htmlFor={name}>{label}</label>   
    {/* select does't have type */}
     <select style={{width:"65%"}} name={name} value={value} onChange={onChange}>
       {roles.map((item, i) => (
        <option key={item?.id || i} value={item?.role}>{item?.role}</option>
       ))}
     </select>
    </div>
  )
}

export default Select