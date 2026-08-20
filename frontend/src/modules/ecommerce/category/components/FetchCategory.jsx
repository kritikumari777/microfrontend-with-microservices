import React from 'react'
import { Table } from '../../../../shared/ui/Table'
import { categoryData } from '../contstant/category.constant'

const FetchCategory = (props) => {
  const { categoryFields, isPanding, data, error } = props
 
  const thData = data?.categorys?.length ? Object.keys(data.categorys[0]) : []
  const tdData = data?.categorys?.length ? data?.categorys?.map((item, i) => Object.values(item)) : []
  const { listOfCategory } = categoryData

  if (isPanding) return <h1>Loading ....</h1>
  if (error) return <h1>Error ...</h1>

  return (
    <div>
      <h5>{listOfCategory}</h5>
      <div className='w-80 h-80 overflow-scroll'>
        <Table thData={thData} tdData={tdData} isCrud={true} {...props} />
      </div>
    </div>
  )
}

export default FetchCategory