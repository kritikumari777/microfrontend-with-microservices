import React, { useState } from 'react'
import { FormComp } from '../../../../shared/ui/Form'
import { onChangeObj } from '../../../../shared/action/EventAct'
import { productData } from "../constants/products.contants"
import { ToastContainer } from 'react-toastify'
import Modal from '../../../../shared/ui/Modal'

const CreateProduct = (props) => {

  const { productFields, setProductFields, isError, isEditId, isEditPanding, isCreatePanding,isOpen, setIsOpen } = props
  const {title, fields, btnFields} = productData

  let text = isEditId ? isEditPanding? "Loading" : "Edit" : isCreatePanding ? "Loading" : btnFields?.btnText

  if (isError) return <p>Somthing Went Wrong</p>

  return (
    <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(prev => !prev)} className="w-95 h-90 m-auto">
      <h3>{title}</h3>
      <FormComp data={fields} formData={productFields}
        btnType={btnFields?.btnType} btnText={text}
        onChange={(e) => onChangeObj(e, setProductFields)}
        isCancle={isEditId && true}
        {...props}
       />
       <ToastContainer position="top-right" autoClose={3000}/>
    </Modal>
  )
}

export default CreateProduct