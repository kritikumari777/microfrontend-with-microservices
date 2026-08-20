import React from 'react'

const Modal = (props) => {

  const {isOpen, setIsOpen, children, className} = props

  return (
    <>
    {isOpen && 
      <div className={`${className} bg-white fixed inset-0 shadow-2xl rounded-2xl py-3 cursor-pointer z-500000`}>
        <div className='absolute right-6' onClick={() => setIsOpen(!isOpen)}>X</div>
        {children}
      </div>
    }
    </>
  )
}

export default Modal