import React from 'react'
import Modal from '../../../../shared/ui/Modal'
import { FormComp } from '../../../../shared/ui/Form'
import { supplierData } from '../constant/supplier.contants'
import { onChangeObj } from '../../../../shared/action/EventAct'
import { ToastContainer } from "react-toastify"
import { Button } from '../../../../shared/ui/Button'

const CreateSupplier = (props) => {

  const { suppilerFields, setSuppilerFields, isCreatePanding, isEditId, isEditPending, createError, setIsOpen, isOpen} = props
  const { title, supplierBtn, fields, btnFields } = supplierData

  if (createError) return <p> Error {createError}</p>
  let text = isEditId ? isEditPending ? "Loading" : "Edit" : isCreatePanding ? "Loading" : btnFields?.btnText

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="w-95 h-95 m-auto">
        <>
        <h5>{title}</h5>
        <FormComp data={fields} formData={suppilerFields}
          btnType={btnFields?.btnType} btnText={text}
          onChange={(e) => onChangeObj(e, setSuppilerFields)}
          isCancle={isEditId && true}
          {...props}
        />
        </>
      </Modal>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}
export default CreateSupplier