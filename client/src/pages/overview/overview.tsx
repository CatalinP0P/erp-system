import React from 'react'
import Card from '../../components/ui/card/card'
import SalesChart from './components/salesChart'
import { useDatabase } from '../../context/databaseContext'

export default function Overview() {
  const { projects } = useDatabase()

  return (
    <>
      <Card>
        <label className="card__title">Projects Completed</label>
        <hr />
        <label className="card__number">
          {projects?.filter((m) => m.status == 'done').length}
        </label>
      </Card>

      <Card>
        <label className="card__title">Total Earnings</label>
        <hr />
        <label className="card__number">231.000 €</label>
      </Card>

      <Card>
        <label className="card__title">Total Expenses</label>
        <hr />
        <label className="card__number">131.000 €</label>
      </Card>

      <Card>
        <label className="card__title">Profit</label>
        <hr />
        <label className="card__number">100.000 €</label>
      </Card>
      <Card size={4}>
        <label className="card__title">Sales & Profit Chart</label>
        <hr />
        <SalesChart />
      </Card>
    </>
  )
}
