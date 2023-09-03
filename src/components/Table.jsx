import React from 'react'

import TableHead from './TableHead';
import TableList from './TableList';

const Table = (props) => {
  return (
    <table className="result">
    <TableHead/>
    <TableList items={props.data} />
    
  </table>
  )
}

export default Table