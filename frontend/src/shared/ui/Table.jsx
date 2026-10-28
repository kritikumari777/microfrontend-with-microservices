import { Button } from './Button'

export const Table = (props) => {
    const { columns = [], data = [], isCrud = false, onDelete, onEdit, isDeletPending = false } = props

    return (
        <table width="100%">
            <thead className='table-border'>
                <tr>
                    {columns?.map((column) => {
                        return (
                            <th key={column?.key ?? colIndex}>
                                {column?.header}
                            </th>
                        )
                    })}
                    {isCrud && <th>Actions</th>}
                </tr>
            </thead>
            <tbody className='table-border'>
                {data?.map((row, rowIdx) => (
                    <tr key={row._id ?? row.id ?? rowIdx}>
                        {columns?.map((column, colIdx) => {
                            return (
                                <td key={column?.key ?? colIdx} className='truncate'>
                                    {column?.render ? column?.render(row) : row?.[column?.key] ?? '-'}
                                </td>
                            )
                        })}
                        {isCrud && (<td>
                            <Button className='btn btn-success m-2' type='button' text="Edit" onClick={() => onEdit?.(row)} />
                            <Button className='btn btn-danger m-2' type='button' text={isDeletPending ? "Loading" : "Delete"} onClick={() => onDelete?.(row)} />
                        </td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
