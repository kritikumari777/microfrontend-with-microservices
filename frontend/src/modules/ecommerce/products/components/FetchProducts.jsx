import React, { useEffect } from 'react'
import { useGetApi } from '../../../../shared/custome-hook/useEcommerseApi'
import { Table } from '../../../../shared/ui/Table'

const FetchProducts = () => {
      const {loading, data, error, getApi} = useGetApi("/category", "header")

    useEffect(() => {
      getApi()
    }, [])

  return (
    <div>
    <Table data={data}/>
    </div>
  )
}

export default FetchProducts