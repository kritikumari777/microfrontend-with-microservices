import React, { useState } from 'react'
import { getAuthHeader } from '../../../../shared/services/api.services'
import { Header } from '../../../../shared/ui/Header'
import { Button } from '../../../../shared/ui/Button'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { cartData } from '../constants/cart.constant'
import CreateCart from './CreateCart'
import FetchCart from './FetchCart'

let fields = {productId: "", qty: "" } // userId: "" taking backend from auth users
let idParams = "/6acca68d0daa385330094c11" // userId

const Cart = () => {
  const [cartFields, setCartFields] = useState(fields)
  const [isEditId, setIsEditId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const { isPanding: isCreatePanding, mutate: createMutate, error: createError } = useApiMutation("/cart", "POST", ["cart"], getAuthHeader)
  //   const { isPanding: isUpadatePanding, mutation: updateMutation, error: updateError } = useApiMutation("/cart", "PUT", ["cart"], getAuthHeader)
  const { isPanding: isDeletePanding, mutate: deleteMutate, error: deleteError } = useApiMutation("/cart", "DELETE", ["cart"], getAuthHeader)

  const { isPanding, data, error } = useApiQuery(["cart"], "/cart", getAuthHeader, idParams)
  const { header, cartBtn } = cartData

  const onSubmit = (e) => {
    e.preventDefault()

    // if (isEditId !== null) {
    //   updateMutation({ body: cartFields, urlParams: `/${isEditId}` })
    // } else {
    if (!cartFields?.name?.trim()) {
      createMutate({ body: cartFields})
    }
    // }
    setCartFields(fields)
    setIsEditId(null)
    setIsOpen(!isOpen)
  }

  const onCencle = () => {
    setIsOpen(prev => !prev)
    setCartFields(fields)
  }

  // const onEdit = (id, row) => {
  //   const { cartItems, shippingAddress, city, zip, country, phone, status, totalPrice, user, orderedDate } = row
  //   setIsEditId(row?._id)
  //   setCartFields({ cartItems: cartItems, shippingAddress: shippingAddress, city: city, zip: zip, country: country, phone: phone, status: status, totalPrice: totalPrice, user: user, orderedDate: orderedDate })
  //   setIsOpen(prev => !prev)
  // }

  const onEdit = () => {
    alert("Can't perform edit operation")
  }

  const onDelete = (row) => {
    const userId = row?.userId?._id
    const productId = row?.productId?._id
    // deleteMutate({ urlParams: `/${userId}/${productId}` })
  }

  return (

    <div>
      <div className='flex justify-around'>
        <Header text={header} />
        <Button type={cartBtn?.btnType} text={cartBtn?.btnText} onClick={() => setIsOpen(prev => !prev)} className="btn btn-success" />
      </div>
      <CreateCart
        setCartFields={setCartFields}
        cartFields={cartFields}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={onSubmit}
        isCreatePanding={isCreatePanding}
        createError={createError}
      // isEditId={isEditId}
      />
      <FetchCart
        isPanding={isPanding}
        data={data?.cartItems}
        error={error}
        onCencle={onCencle}
        onEdit={onEdit}
        onDelete={onDelete}
        // isUpadatePanding={isUpadatePanding}
        isDeletePanding={isDeletePanding}
      // updateError={updateError}
      // deleteError={deleteError}
        isEditId={isEditId}
      />
    </div>
  )
}

export default Cart