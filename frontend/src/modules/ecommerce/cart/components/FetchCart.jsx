import React from 'react'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { cartData } from '../constants/cart.constant'
import { Header } from '../../../../shared/ui/Header'
import { Table } from '../../../../shared/ui/Table'

const FetchCart = () => {

    const {data, isLoading, isError, error} = useApiQuery(['cart'], "/cart")
    const {header} = cartData

    const thData = data?.cart?.length ? Object.keys(data?.cart) : []
    const tdData = data?.cart?.length ? data?.cart?.map((item , i) => Object.values(item)) : []

  return (
    <div className='w-80 h-80 overflow-scroll'>
     <Header text={header}/>
     <Table thData={thData} tdData={tdData}/>
    </div>
  )
}

export default FetchCart