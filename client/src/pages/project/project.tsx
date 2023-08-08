import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban'
import React, { useEffect, useRef } from 'react'
import { ArrowBackIosNew } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/ui/card/card'
import Button from '../../components/ui/button/button'

import './project.scss'

export default function Project() {
  const boardRef = useRef(null)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    console.log(params)
  }, [])

  const logData = () => {
    const board: any = boardRef.current
    console.log(board.kanbanData)
  }

  const boardData = [
    {
      Title: 'Setup Project',
      Status: 'doing',
      Summary: 'Setup the tech stack and base project',
    },
    {
      Title: 'Negociate the project price',
      Status: 'todo',
      Summary: 'Finding the final price for the project',
    },
  ]

  return (
    <>
      <div className="back--button" onClick={() => navigate('/projects')}>
        <ArrowBackIosNew fontSize="inherit" />
        <label>Back</label>
      </div>
      <Card size={4}>
        <label className="card__title">Projects</label>
        <hr />
        <KanbanComponent
          ref={boardRef}
          style={{ marginLeft: '-.75rem', marginRight: '-.75rem' }}
          dataSource={boardData}
          keyField="Status"
          cardSettings={{ contentField: 'Summary', headerField: 'Title' }}
        >
          <ColumnsDirective>
            <ColumnDirective headerText="Todo" keyField={'todo'} />
            <ColumnDirective headerText="Doing" keyField={'doing'} />
            <ColumnDirective headerText="Done" keyField={'done'} />
          </ColumnsDirective>
        </KanbanComponent>
        <div className="save-button__container">
          <Button variant="primary">Save</Button>
        </div>
      </Card>
    </>
  )
}
