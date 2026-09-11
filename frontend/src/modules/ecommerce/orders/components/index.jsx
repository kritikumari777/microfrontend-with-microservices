import React, { useState } from 'react'
import { getAuthHeader } from '../../../../shared/services/api.services'
import { Header } from '../../../../shared/ui/Header'
import { ordersData } from '../constants/orders.constant'
import CreateOrder from './CreateOrder'
import FetchOrders from './FetchOrders'
import { Button } from '../../../../shared/ui/Button'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'

let fields = { cartItems: "", shippingAddress: "", city: "", zip: "", country: "", phone: "", status: "", totalPrice: "", user: "", orderedDate: "" }

const Orders = () => {
  const [ordersFields, setOrdersFieldes] = useState(fields)
  const [isEditId, setIsEditId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const { isPanding: isCreatePanding, mutation: createMutation, error: createError } = useApiMutation("/order", "POST", ["order"], getAuthHeader)
  const { isPanding: isUpadatePanding, mutation: updateMutation, error: updateError } = useApiMutation("/order", "PUT", ["order"], getAuthHeader)
  const { isPanding: isDeletePanding, mutation: deleteMutation, error: deleteError } = useApiMutation("/order", "DELET", ["order"], getAuthHeader)

  const { isPanding, data, error } = useApiQuery(["order"], "/order", getAuthHeader)

  const { header, ordersBtn } = ordersData

  const onSubmit = (e) => {
    e.preventDefault()

    if (isEditId !== null) {
      updateMutation({ body: ordersFields, urlParams: `/${isEditId}` })
    } else {
      if (ordersFields?.name?.trim()) {
        createMutation({ body: ordersFields })
      }
    }
    setOrdersFieldes(fields)
  }

  const onCencle = () => {
    setIsOpen(prev => !prev)
    setIsEditId(null)
    setOrdersFieldes(fields)
  }

  const onEdit = (id, row) => {
    const { cartItems, shippingAddress, city, zip, country, phone, status, totalPrice, user, orderedDate } = row
    setIsEditId(id)
    setOrdersFieldes({ cartItems: cartItems, shippingAddress: shippingAddress, city: city, zip: zip, country: country, phone: phone, status: status, totalPrice: totalPrice, user: user, orderedDate: orderedDate })
    setIsOpen(prev => !prev)
  }

  const onDelete = (id) => {
    deleteMutation({ urlParams: `/${id}` })
    setOrdersFieldes(temp)
  }

  return (

    <div>
      <div className='flex justify-around'>
        <Header text={header} />
        <Button type={ordersBtn?.btnType} text={ordersBtn?.btnText} onClick={() => setIsOpen(true)} className="btn btn-success" />
      </div>
      <CreateOrder
        setOrdersFields={setOrdersFieldes}
        ordersFields={ordersFields}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCreatePanding={isCreatePanding}
        createError={createError}
        isEditId={isEditId}
      />
      <FetchOrders
        isPanding={isPanding}
        data={data}
        error={error}
        onSubmit={onSubmit}
        onCencle={onCencle}
        onEdit={onEdit}
        onDelete={onDelete}
        isUpadatePanding={isUpadatePanding}
        isDeletePanding={isDeletePanding}
        updateError={updateError}
        deleteError={deleteError}
        isEditId={isEditId}
      />
    </div>
  )
}

export default Orders