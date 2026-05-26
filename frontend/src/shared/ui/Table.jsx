import React from 'react'
import TableTh from './TableTh'

export const Table = ({ thData, tdData  }) => {

    return (
        <table>
            <thead className='table-border'>
                <tr>
                {thData?.map((item, i) => (
                        <th key={i}>{item}</th>
                    ))}
                    </tr>
            </thead>
            <tbody className='table-border'>
                {tdData?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                        {row?.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                            {cell}
                        </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
