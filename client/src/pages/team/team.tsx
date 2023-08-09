import React, { useEffect, useState } from 'react'
import Card from '../../components/ui/card/card'
import CustomTable, {
  TableColProps,
} from '../../components/ui/tables/customTable/customTable'
import { useDatabase } from '../../context/databaseContext'

export default function Team() {
  const tableCols: TableColProps[] = [
    { title: 'id', sortable: true },
    { title: 'name', sortable: true },
    { title: 'email', sortable: true },
    { title: 'signDate', sortable: true },
    { title: 'salary', sortable: true },
  ]

  const { employees, getAverageEmployeeSalary, getMinimumEmployeeSalary } =
    useDatabase()

  const [averageSalary, setAverageSalary] = useState(0)
  const [minSalary, setMinSalary] = useState(0)

  const fetchData = async () => {
    setAverageSalary(
      getAverageEmployeeSalary ? await getAverageEmployeeSalary() : 2000
    )
    setMinSalary(
      getMinimumEmployeeSalary ? await getMinimumEmployeeSalary() : 1400
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Card size={1}>
        <label className="card__title">Team Members</label>
        <hr />
        <label className="card__number">{employees?.length}</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Salary</label>
        <hr />
        <label className="card__number">{averageSalary} €</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Working Hours</label>
        <hr />
        <label className="card__number">6</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Base Salary</label>
        <hr />
        <label className="card__number">{minSalary} €</label>
      </Card>

      <Card size={4}>
        <label className="card__title">Employes</label>
        <hr />
        <CustomTable cols={tableCols} rows={employees ? employees : []} />
      </Card>
    </>
  )
}
