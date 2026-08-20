import React from 'react'
import { Table } from '../../../../shared/ui/Table'
import { supplierData } from '../constant/supplier.contants'

const FetchSupplier = (props) => {
  const { suppilerFields, isPanding, data, error } = props
  const thData = data?.suppilers?.length ? Object.keys(data.suppilers[0]) : []
  const tdData = data?.suppilers?.length ? data?.suppilers?.map((item, i) => Object.values(item)) : []
  const { ListOfSupplier } = supplierData

  if (isPanding) return <h1>Loading ....</h1>
  if (error) return <h1>Error ...</h1>

  return (
    <div>
      <h5>{ListOfSupplier}</h5>
      <div className='w-100 h-80 overflow-scroll mx-5'>
        <Table thData={thData} tdData={tdData} isCrud={true} {...props} className="" />
      </div>
    </div>
  )
}

export default FetchSupplier