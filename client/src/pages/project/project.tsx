import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/ui/card/card'

export default function Project() {
  const params = useParams()

  useEffect(() => {
    console.log(params)
  }, [])

  return (
    <Card size={4}>
      <KanbanComponent>
        <ColumnsDirective>
          <ColumnDirective headerText="Todo" keyField={'todo'} />
          <ColumnDirective headerText="Doing" keyField={'doing'} />
          <ColumnDirective headerText="Done" keyField={'done'} />
        </ColumnsDirective>
      </KanbanComponent>
    </Card>
  )
}
