import React from 'react'
import TableTh from './TableTh'
import { Button } from './Button'

export const Table = (props) => {
    const { thData, tdData, isCrud = false, onDelete, onEdit, isDeletPending } = props

    return (
        <table>
            <thead className='table-border'>
                <tr>
                    {thData?.map((item, i) => {
                        const id = thData.indexOf(item) === 0 && item
                        return (
                            <th key={i}>{!id && item}</th>
                        )
                    })}
                    {isCrud && <th>Actions</th>}
                </tr>
            </thead>
            <tbody className='table-border'>
                {tdData?.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row?.map((cell, cellIndex) => {
                            const id = row.indexOf(cell) === 0 && cell

                            return (
                                <td key={cellIndex}>
                                    {!id && cell}
                                </td>
                            )
                        })}
                        {isCrud && <td>
                            <Button className='btn btn-success m-2' type='button' text="Edit" onClick={() => onEdit(row)} />
                            <Button className='btn btn-danger m-2' type='button' text={isDeletPending ? "Loading" : "Delete"} onClick={() => onDelete(row)} />
                        </td>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
