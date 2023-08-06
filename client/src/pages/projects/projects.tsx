import Card from '../../components/ui/card/card'
import React from 'react'
import CustomTable, {
  TableColProps,
} from '../../components/ui/tables/customTable/customTable'

export default function Projects() {
  const projectRows = [
    {
      id: 1,
      projectTitle: 'Portfolio Web Page',
      buyerEmail: 'catalinpce@gmail.com',
      status: 'done',
    },
    {
      id: 2,
      projectTitle: 'Ecommerce Web App',
      buyerEmail: 'john@gmail.com',
      status: 'doing',
    },
  ]
  const projectCols: TableColProps[] = [
    { title: 'id', sortable: true },
    { title: 'projectTitle', sortable: true },
    { title: 'buyerEmail', sortable: true },
    { title: 'status', sortable: true },
  ]
  return (
    <Card size={4}>
      <label className="card__title">Projects</label>
      <hr />
      <CustomTable rows={projectRows} cols={projectCols} />
    </Card>
  )
}
