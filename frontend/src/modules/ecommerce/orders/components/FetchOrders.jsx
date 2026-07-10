import React from 'react'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { Table } from '../../../../shared/ui/Table'
import { Header } from '../../../../shared/ui/Header'
import { ordersData } from '../constants/orders.constant'

const FetchOrders = () => {
   const  {data, isLoading, isError, error} = useApiQuery(['order'], '/order')
   const {header} = ordersData

   const thData = data?.orderList?.length ? Object.keys(data?.orderList[0]) : []
   const tdData = data?.orderList?.length ? data?.orderList?.map((item, i) => Object.values(item)) :  []

   if(isLoading) return <p>Loading ...</p>
   if(isError)  return <p>Somtning Went Wrong - {error}</p>

  return (
    <div>
    <Header text={header}/>
    <div className='overflow-scroll w-95 h-80 m-5'>
      <Table thData={thData}  tdData={tdData} />
    </div>
    </div>
  )
}

export default FetchOrders