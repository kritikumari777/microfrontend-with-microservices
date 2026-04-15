import React from 'react'

const Logout = () => {

    const HandleLogout = () => {
        console.log("Logout")
    }
  return (
    <div>
        <button type='button' className='btn btn-danger' onClick={HandleLogout}>Logout</button>
    </div>
  )
}

export default Logout