import React from 'react'
import Card from '../../components/ui/card/card'
import CustomTable, {
  TableColProps,
} from '../../components/ui/tables/customTable/customTable'

export default function Team() {
  const tableCols: TableColProps[] = [
    { title: 'id', sortable: true },
    { title: 'name', sortable: true },
    { title: 'email', sortable: true },
    { title: 'signDate', sortable: true },
    { title: 'salary', sortable: true },
  ]

  const employes = [
    {
      id: 1,
      name: 'Pop Catalin',
      email: 'catalinpce@gmail.com',
      signDate: `${
        new Date().getUTCMonth() + 1
      }-${new Date().getUTCFullYear()}`,
      salary: 2400,
    },
    {
      id: 2,
      name: 'John Mike',
      email: 'john@gmail.com',
      signDate: `${
        new Date().getUTCMonth() + 1
      }-${new Date().getUTCFullYear()}`,
      salary: 2200,
    },
  ]

  return (
    <>
      <Card size={1}>
        <label className="card__title">Team Members</label>
        <hr />
        <label className="card__number">114</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Salary</label>
        <hr />
        <label className="card__number">2140 €</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Working Hours</label>
        <hr />
        <label className="card__number">6</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Base Salary</label>
        <hr />
        <label className="card__number">1840 €</label>
      </Card>

      <Card size={4}>
        <label className="card__title">Employes</label>
        <hr />
        <CustomTable cols={tableCols} rows={employes} />
      </Card>
    </>
  )
}
