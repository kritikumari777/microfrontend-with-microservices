import React from 'react'
import { cartData } from '../constants/cart.constant'
import Modal from '../../../../shared/ui/Modal'
import { FormComp } from "../../../../shared/ui/Form"
import { onChangeObj } from '../../../../shared/action/EventAct'
const CreateCart = (props) => {
  const { isOpen, setIsOpen, cartFields, setCartFields, isEditId, isCreatePanding } = props
  const { addCart, fields, btnFields } = cartData
  return (
    <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(prev => !prev)} className="w-95 h-50 m-auto">
      <h5>{addCart}</h5>
      <FormComp data={fields} formData={cartFields}
        btnType={btnFields?.btnType} btnText={isCreatePanding ?  Loading  : btnFields?.btnText}
        onChange={(e) => onChangeObj(e, setCartFields)}
        isCancle={isEditId && true}
        {...props}
      />
    </Modal>
  )
}

export default CreateCart