import { ToastContainer } from 'react-toastify'
import { Table } from '../../../../shared/ui/Table'
import { productData } from '../constants/products.contants'

const FetchProducts = (props) => {

  const { isPanding, isError, error, data = [], onDelete, onEdit, isDeletPending = false } = props

  const { ListOfProduct, columns } = productData

  if (isPanding) return <p>Loading....</p>
  if (isError) return <p>Somthing Went Wrong - {error?.message}</p>
  if (!data?.length) return <p>No Product available</p>

  return (
    <div className='px-5'>
      <h5>{ListOfProduct}</h5>
      <div className='h-80 w-100 overflow-scroll'>
        <Table
          columns={columns}
          data={data}
          isCrud={true}
          onDelete={onDelete}
          onEdit={onEdit}
          isDeletPending={isDeletPending}
        />
      </div>
       <ToastContainer position="top-right" autoClose={3000}/>
    </div>
  )
}

export default FetchProducts