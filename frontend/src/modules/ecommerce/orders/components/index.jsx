import { useState } from 'react'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { getAuthHeader } from '../../../../shared/services/api.services'
import FetchOrders from './FetchOrders'
import EditOrder from './CreateOrder'

const initialOrderFields = { status: "Pending" };
const Orders = () => {
  const [ordersFields, setOrdersFieldes] = useState(initialOrderFields)
  const [isEditId, setIsEditId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const { isPanding: isUpadatePanding, mutate: updateMutate, error: updateError } = useApiMutation("/order", "PATCH", ["admin-orders"], getAuthHeader)
  const { isPanding: orderIsPanding, data: orderData, error: orderError } = useApiQuery(["admin-orders"], "/order/orderList", getAuthHeader)

  const onSubmit = (e) => {
    e.preventDefault()
    e.stoppropagation()
    if (isEditId !== null) {
      updateMutate({
        body: { status: ordersFields.status },
        urlParams: `/${isEditId}`
      })
    }
    setOrdersFieldes(initialOrderFields)
    setIsOpen(!isOpen)
    setIsEditId(null)
  }

  const onCencle = () => {
    setOrdersFieldes(initialOrderFields)
    setIsOpen(!isOpen)
    setIsEditId(null)
  }

  const onEdit = (row) => {
    setOrdersFieldes({ status: row.status })
    setIsEditId(row._id)
    setIsOpen(!isOpen)
  }

  return (

    <div>
      <div className='flex justify-around'>
      </div>
      <EditOrder
        setOrdersFields={setOrdersFieldes}
        ordersFields={ordersFields}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isEditId={isEditId}
        isEditPanding={isUpadatePanding}
      />
      <FetchOrders
        isPanding={orderIsPanding}
        data={orderData?.orderList}
        error={orderError}
        onSubmit={onSubmit}
        onCencle={onCencle}
        onEdit={onEdit}
        isUpadatePanding={isUpadatePanding}
        updateError={updateError}
        isEditId={isEditId}
      />
    </div>
  )
}

export default Orders