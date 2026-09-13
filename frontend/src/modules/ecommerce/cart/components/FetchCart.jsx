import React from 'react'
import { Table } from '../../../../shared/ui/Table'
import { cartData } from '../constants/cart.constant'

const FetchCart = (props) => {
  const { data, isPanding, error } = props
  const { listOfCart } = cartData

  if (isPanding) return <p>Loading ...</p>

  if (error) {
    return <p>Something Went Wrong - {error.message}</p>
  }

  // First value/header is _id because your current Table hides it
  const thData = [
    "_id",
    "Product",
    "Description",
    "Price",
    "Quantity",
    "Total"
  ]

  const tdData = data?.cartItems?.map((item) => {
    const product = item.productId
    const price = product?.price ?? 0
    const qty = item?.qty ?? 0
    const total = price * qty

    return [
      item._id,
      product?.title ?? "-",
      product?.description ?? "-",
      `₹${price}`,
      qty,
      `₹${total}`
    ]
  }) ?? []

  return (
    <div>
      <h5>{listOfCart}</h5>

      <div className='overflow-scroll w-100 h-80 p-5'>
        <Table
          thData={thData}
          tdData={tdData}
          isCrud={true}
          {...props}
        />
      </div>
    </div>
  )
}

export default FetchCart