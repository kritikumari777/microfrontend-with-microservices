import React, { useEffect } from 'react'
import { useGetApi } from '../../../../shared/custome-hook/useEcommerseApi'
import { Table } from '../../../../shared/ui/Table'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { Header } from '../../../../shared/ui/Header'
import { categoryData } from '../contstant/category.constant'

const FetchCategory = ({categoryFields}) => {
    // const {loading, data, error, getApi} = useGetApi("/category", "")
    const {loading, data, error, getApi} = useApiQuery(["category"],"/category")
    const {listOfCategory} = categoryData
    
    // useEffect(() => {
    //   getApi()
    // }, [categoryFields])

    const thData = data?.categorys?.length ? Object.keys(data.categorys[0]) : []
    const tdData = data?.categorys?.length ? data?.categorys?.map((item, i) => Object.values(item)) : []
    
  return (
    <div>
    <h5>{listOfCategory}</h5> 
    <div className='w-80 h-80 overflow-scroll'>
    <Table thData={thData} tdData={tdData}/>
    </div>
    </div>
  )
}

export default FetchCategory