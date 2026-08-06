import React, { useState } from 'react'
import { Header } from '../../../../shared/ui/Header'
import { FormComp } from '../../../../shared/ui/Form'
import { onChangeObj } from '../../../../shared/action/EventAct'
import { productData } from "../constants/products.contants"
import { ToastContainer } from 'react-toastify'

const CreateProduct = (props) => {

  const { productFields, setProductFields, isError, isEditId, isEditPanding, isCreatePanding } = props
  const {title, fields, btnFields} = productData

  let text = isEditId ? isEditPanding? "Loading" : "Edit" : isCreatePanding ? "Loading" : btnFields?.btnText

  if (isError) return <p>Somthing Went Wrong</p>

  return (
    <div>
      <h3>{title}</h3>
      <FormComp data={fields} formData={productFields}
        btnType={btnFields?.btnType} btnText={text}
        onChange={(e) => onChangeObj(e, setProductFields)}
        isCancle={isEditId && true}
        {...props}
       />
       <ToastContainer position="top-right" autoClose={3000}/>
    </div>
  )
}

export default CreateProduct