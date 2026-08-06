import React, { useEffect } from 'react'
import { useGetApi } from '../../../../shared/custome-hook/useEcommerseApi'
import { Table } from '../../../../shared/ui/Table'
import { productData } from '../constants/products.contants'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { getAuthHeader } from '../../../../shared/services/api.services.js'

const FetchProducts = (props) => {

  const {isPanding, isError, error, data} = props

  const { ListOfProduct } = productData

  const thData = data?.products.length ? Object.keys(data.products[0]) : []
  const tdData = data?.products.length ? data?.products?.map((item, i) => Object.values({...item, categoryId: item.categoryId?.name})) : []

  if(isPanding) return <p>Loading....</p>
  if(isError) return <p>Somthing Went Wrong - {error}</p>

  return (
    <div>
      <h5>{ListOfProduct}</h5>
      <div className='h-80 w-80 overflow-scroll'>
      <Table thData={thData} tdData={tdData}  isCrud={true} {...props}/>
      </div>
    </div>
  )
}

export default FetchProducts