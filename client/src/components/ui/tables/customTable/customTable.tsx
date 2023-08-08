import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import React, { useState } from 'react'
import TableHeader from './customTableHeader'
import './customTable.scss'
import Button from '../../button/button'

export interface TableColProps {
  title: string
  sortable: boolean
}

interface CustomTableProps {
  rows: any[]
  cols: TableColProps[]
  removeRow?: any
  showDetails?: any
}

export default function CustomTable({
  rows,
  cols,
  removeRow,
  showDetails,
}: CustomTableProps) {
  const [pageSize, setPageSize] = useState(2)
  const [page, setPage] = useState(0)
  const [sortingField, setSortingField] = useState('id')
  const [sortingDirection, setSortingDirection] = useState('asc')

  const handleSortClick = (e: any, field: any) => {
    const isAscendenting = sortingField == field && sortingDirection == 'asc'
    setSortingField(field)
    setSortingDirection(isAscendenting ? 'desc' : 'asc')
  }

  const handlePageSizeChange = (e: any) => {
    const { value } = e.target
    setPageSize(value)
    setPage(0)
  }

  const handlePageChange = (e: any, page: number) => {
    setPage(page)
  }

  const sortRows = () => {
    const array = rows
    for (let i = 0; i < rows.length; i++) {
      for (let j = i + 1; j < rows.length; j++) {
        if (sortingDirection == 'asc') {
          if (array[i][sortingField] > array[j][sortingField]) {
            const aux = array[i]
            array[i] = array[j]
            array[j] = aux
          }
        } else {
          if (array[i][sortingField] < array[j][sortingField]) {
            const aux = array[i]
            array[i] = array[j]
            array[j] = aux
          }
        }
      }
    }
    return array
  }

  const formatDate = (date: Date) => {
    return `${date.getUTCDate()}-${
      date.getMonth() + 1
    }-${date.getUTCFullYear()}`
  }

  return (
    <TableContainer>
      <Table>
        <TableHeader
          cols={cols}
          removeRow={removeRow ? true : false}
          showDetails={showDetails ? true : false}
          handleSortClick={handleSortClick}
          handlePageSizeChange={handlePageSizeChange}
          sortingField={sortingField}
          sortingDirection={sortingDirection}
        />
        {sortRows()
          .slice(page * pageSize, page * pageSize + pageSize)
          .map((row) => {
            return (
              <TableRow key={Math.random() * 1000}>
                {cols.map((col) => {
                  return (
                    <TableCell key={Math.random() * 1000}>
                      {row[col.title] instanceof Date
                        ? formatDate(row[col.title])
                        : row[col.title]}
                    </TableCell>
                  )
                })}
                {showDetails && (
                  <TableCell>
                    <Button
                      variant="secondary"
                      onClick={() => showDetails(row.id)}
                    >
                      Show Details
                    </Button>
                  </TableCell>
                )}
                {removeRow && (
                  <TableCell>
                    <button
                      onClick={() => removeRow(row.id)}
                      className="button button--danger"
                    >
                      Remove
                    </button>
                  </TableCell>
                )}
              </TableRow>
            )
          })}
      </Table>
      <div className="table__pagination">
        <TablePagination
          style={{ minWidth: '100%' }}
          count={rows.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handlePageSizeChange}
          page={page}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[2, 5, 10, 15]}
        />
      </div>
    </TableContainer>
  )
}
