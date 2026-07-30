import React from 'react'
import { FormComp } from '../../../../shared/ui/Form'
import { categoryData } from '../contstant/category.constant'
import { onChangeObj } from '../../../../shared/action/EventAct'
import { ToastContainer } from "react-toastify"


const CreateCategory = (props) => {

    const { categoryFields, setCategoryFields, isCreatePanding, isEditId, isEditPending, createError } = props
    const { title, fields, btnFields } = categoryData

  if(createError) return <p> Error {createError}</p>
  let text = isEditId ? isEditPending ? "Loading" : "Edit" : isCreatePanding ? "Loading" : btnFields?.btnText

  return (
    <div>
      <h5>{title}</h5>
      <FormComp data={fields} formData={categoryFields}
        btnType={btnFields?.btnType} btnText={text}
        onChange={(e) => onChangeObj(e, setCategoryFields)}
        isCancle= {isEditId && true}
        {...props}
        />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default CreateCategory