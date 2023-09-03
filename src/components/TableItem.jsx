import React from 'react'

const TableItem = (props) => {
  return (
    <tr>
             
            <td>{props.data.year}</td>
            <td>{props.data.savingsEndOfYear}</td>
            <td>{props.data.yearlyInterest}</td>
            <td></td>
            <td>{props.data.totalInvestment}</td>
          </tr>
  )
}

export default TableItem