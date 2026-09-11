import React from 'react'
import { Table } from '../../../../shared/ui/Table'
import { ordersData } from '../constants/orders.constant'

const FetchOrders = (props) => {
  const { data, isPanding, error } = props
  const { listOfOrders } = ordersData

  const thData = data?.orderList?.length ? Object.keys(data?.orderList[0]) : []
  const tdData = data?.orderList?.length ? data?.orderList?.map((item, i) => Object.values(item)) : []

  if (isPanding) return <p>Loading ...</p>
  if (error) return <p>Somtning Went Wrong - {error}</p>

  return (
    <div>
      <h5>{listOfOrders}</h5>
      <div className='overflow-scroll w-100 h-80 p-5'>
        <Table thData={thData} tdData={tdData} />
      </div>
    </div>
  )
}

export default FetchOrders