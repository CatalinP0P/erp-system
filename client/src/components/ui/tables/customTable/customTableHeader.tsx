import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import React from 'react'
import { TableColProps } from './customTable'

export default function TableHeader(props: any) {
  const {
    cols,
    removeRow,
    handlePageSizeChange,
    handleSortClick,
    sortingField,
    sortingDirection,
  } = props

  return (
    <TableHead>
      <TableRow>
        {cols.map((col: TableColProps) => (
          <TableCell key={Math.random() * 1000}>
            {col.sortable ? (
              <TableSortLabel
                active={sortingField === col.title}
                className="table__column__title"
                direction={
                  sortingField === col.title ? sortingDirection : 'asc'
                }
                onClick={(e) => handleSortClick(e, col.title)}
              >
                <label className="table__column__title">{col.title}</label>
              </TableSortLabel>
            ) : (
              <label
                className="table__column__title"
                style={{ color: 'white', opacity: 0.6 }}
              >
                {col.title[0].toUpperCase()}
                {col.title.slice(1, col.title.length)}
              </label>
            )}
          </TableCell>
        ))}
        {removeRow && (
          <TableCell
            style={{ color: 'white', fontWeight: 'bold', opacity: '.6' }}
          >
            Remove
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  )
}
