import React, { useEffect } from 'react'
import { useGetApi } from '../../../../shared/custome-hook/useEcommerseApi'
import { Table } from '../../../../shared/ui/Table'

const FetchCategory = ({categoryFields}) => {
    const {loading, data, error, getApi} = useGetApi("/category", "")
    
    useEffect(() => {
      getApi()
    }, [categoryFields])

    const thData = data?.categorys?.length ? Object.keys(data.categorys[0]) : []
    const tdData = data?.categorys?.length ? data?.categorys?.map((item, i) => Object.values(item)) : []
  return (
    <div>
    <Table thData={thData} tdData={tdData}/>
    </div>
  )
}

export default FetchCategory