import React from 'react'
import { Table } from '../../../../shared/ui/Table'
import { ordersData } from '../constants/orders.constant'

const FetchOrders = (props) => {
  const { data, isPanding, error, onDelete, onEdit, isDeletPending = false } = props
  const { listOfOrders, columns } = ordersData

  if (isPanding) return <p>Loading ...</p>
  if (error) return <p>Somtning Went Wrong - {error.message}</p>
  if (!data?.length) return <p>No Orders available</p>

  return (
    <div>
      <h5>{listOfOrders}</h5>
      <div className='overflow-scroll w-100 h-80 p-5'>
        <Table
          columns={columns}
          data={data}
          isCrud={true}
          onDelete={()=>{alert("Not allowed to delete it")}}
          onEdit={onEdit}
          isDeletPending={isDeletPending}
        />
      </div>
    </div>
  )
}

export default FetchOrders