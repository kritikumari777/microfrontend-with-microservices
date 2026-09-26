import React from 'react'

const Select = ({label, name, value, roles, onChange}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {/* select does't have type */}
      <select style={{ width: "65%" }} name={name} value={value} onChange={onChange}>

        <option value="" disabled>
          Select the {name}
        </option>

        {roles.map((item, i) => {
          return (
            <option key={item?._id || item?.id || i}
              value={item?._id || item?.role || ""}>
              {item?.name ? item?.name : item?.role}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select