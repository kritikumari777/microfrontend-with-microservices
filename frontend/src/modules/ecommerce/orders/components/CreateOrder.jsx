import { ordersData } from '../constants/orders.constant'
import Modal from '../../../../shared/ui/Modal'
import { FormComp } from "../../../../shared/ui/Form"
import { onChangeObj } from '../../../../shared/action/EventAct'

const EditOrder = (props) => {
  const { isOpen, setIsOpen, ordersFields, setOrdersFields, isEditId, isEditPanding } = props
  const {fields, btnFields } = ordersData

  const text = isEditPanding ? "Loading" : btnFields?.btnText;

  return (
    <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(prev => !prev)} className="w-95 h-30 m-auto">
      <FormComp data={fields} formData={ordersFields}
        btnType={btnFields?.btnType} btnText={text}
        onChange={(e) => onChangeObj(e, setOrdersFields)}
        isCancle={isEditId && true}
        {...props}
      />
    </Modal>
  )
}

export default EditOrder