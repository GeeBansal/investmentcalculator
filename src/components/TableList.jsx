import React from 'react'
import TableItem from './TableItem'

const TableList = (props) => {
  return (
    <tbody>
     
          {props.items.map((data)=>(
            // <h1>{data.savingsEndOfYear}</h1>
            <TableItem key={data.year} data={data} />
          ))}
         
        </tbody>
  )
}

export default TableList