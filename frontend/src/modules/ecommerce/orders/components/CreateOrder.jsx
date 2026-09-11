import React from 'react'
import { ordersData } from '../constants/orders.constant'
import Modal from '../../../../shared/ui/Modal'
import { FormComp } from "../../../../shared/ui/Form"
const CreateOrder = (props) => {
  const { isOpen, setIsOpen, ordersFields, setOrdersFields, isEditId } = props
  const { addOrder, fields, btnFields } = ordersData
  return (
    <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(prev => !prev)} className="w-95 h-100 m-auto">
      <h5>{addOrder}</h5>
      <FormComp data={fields} formData={ordersFields}
        btnType={btnFields?.btnType} btnText={btnFields?.btnText}
        onChange={(e) => onChangeObj(e, setOrdersFields)}
        isCancle={isEditId && true}
        {...props}
      />
    </Modal>
  )
}

export default CreateOrder