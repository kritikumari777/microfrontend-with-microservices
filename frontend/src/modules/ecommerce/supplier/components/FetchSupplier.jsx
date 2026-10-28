import { Table } from '../../../../shared/ui/Table'
import { supplierData } from '../constant/supplier.contants'

const FetchSupplier = (props) => {
  const { isPanding, data, error, onDelete, onEdit, isDeletPending = false } = props

  const { listOfSupplier, columns } = supplierData

  if (isPanding) return <h1>Loading ....</h1>
  if (error) return <h1>Error ...</h1>
  if (!data?.length) return <p>No supplier available</p>

  return (
    <div>
      <h5>{listOfSupplier}</h5>
      <div className='w-100 h-80 overflow-scroll px-5'>
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

export default FetchSupplier