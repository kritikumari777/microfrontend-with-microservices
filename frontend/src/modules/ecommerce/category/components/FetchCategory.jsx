import React from 'react'
import { Table } from '../../../../shared/ui/Table'
import { categoryData } from '../contstant/category.constant'

const FetchCategory = (props) => {
  const {isPanding, data, error, onDelete, onEdit, isDeletPending = false } = props
 
  // const thData = data?.categorys?.length ? Object.keys(data.categorys[0]) : []
  // const tdData = data?.categorys?.length ? data?.categorys?.map((item, i) => Object.values(item)) : []

  const { listOfCategory, columns } = categoryData

  if (isPanding) return <h1>Loading ....</h1>
  if (error) return <h1>Error ...</h1>
  if (!data?.length) return <p>No Product available</p>

  return (
    <div>
      <h5>{listOfCategory}</h5>
      <div className='w-100 h-80 overflow-scroll'>
         <Table
          columns={columns}
          data={data}
          isCrud={true}
          onDelete={onDelete}
          onEdit={onEdit}
          isDeletPending={isDeletPending}
        />
      </div>
    </div>
  )
}

export default FetchCategory