import React, { useEffect } from 'react'
import { useGetApi } from '../../../../shared/custome-hook/useEcommerseApi'
import { Table } from '../../../../shared/ui/Table'
import { productData } from '../constants/products.contants'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'

const FetchProducts = () => {
  // const { loading, data, error, getApi } = useGetApi("/category", "header")
  const { loading, data, isError, error, } = useApiQuery(['product'], "/product")
  const { ListOfProduct } = productData

  // useEffect(() => {
  //   getApi()
  // }, [])

  const thData = data?.products.length ? Object.keys(data.products[0]) : []
  const tdData = data?.products.length ? data?.products?.map((item, i) => Object.values({...item, categoryId: item.categoryId?.name})) : []

  return (
    <div>
      <h5>{ListOfProduct}</h5>
      <div className='h-80 w-80 overflow-scroll'>
      <Table thData={thData} tdData={tdData}  />
      </div>
    </div>
  )
}

export default FetchProducts