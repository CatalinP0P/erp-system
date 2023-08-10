import Card from '../../components/ui/card/card'
import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/ui/tables/customTable/customTable'
import { useNavigate } from 'react-router-dom'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import { DefaultizedPieValueType } from '@mui/x-charts'
import { useDatabase } from '../../context/databaseContext'
import { projectCategories } from '../../types/project'
import { expenseCategories } from '../../types/expense'
import { updateJsxSelfClosingElement } from 'typescript'

export default function Projects() {
  const {
    projects,
    averageProjectPrice,
    totalProfit,
    averageProjectProfit,
    averageProjectExpenses,
    expenses,
  } = useDatabase()
  const navigate = useNavigate()

  const projectCols = [
    { title: 'id', sortable: true },
    { title: 'title', sortable: true },
    { title: 'buyerEmail', sortable: true },
    { title: 'date', sortable: true },
    { title: 'status', sortable: true },
    { title: 'price', sortable: true },
  ]

  const handleShowDetails = (projectID: number) => {
    navigate(`/project/${projectID}`)
  }

  const [projectCategoriesData, setProjectCategories] = useState<
    {
      value: number
      label: string
    }[]
  >([])

  const [projectExpensesData, setProjectExpensesData] = useState<
    { value: number; label: string }[]
  >([])

  const averageExpenses = [
    { value: 5, label: 'Hosting' },
    { value: 25, label: 'Services' },
    { value: 25, label: 'Database Storage' },
    { value: 35, label: 'Labour' },
  ]

  const TOTAL = projectCategoriesData
    .map((item) => item.value)
    .reduce((a, b) => a + b, 0)

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL
    return `${(percent * 100).toFixed(0)}%`
  }

  const completeCategoriesChart = () => {
    setProjectCategories([])
    projectCategories.map((category) => {
      setProjectCategories((old: any) => [
        ...old,
        {
          value: projects?.filter((m) => m.category == category).length,
          label: category,
        },
      ])
    })

    console.log(projectCategoriesData)
  }

  const completeExpensesChart = () => {
    setProjectExpensesData([])
    expenseCategories.map((category: string) => {
      setProjectExpensesData((old: any) => [
        ...old,
        {
          value: expenses?.filter((m) => m.category == category).length,
          label: category,
        },
      ])
    })
  }

  useEffect(() => {
    completeCategoriesChart()
    completeExpensesChart()
  }, [projects])

  useEffect(() => {
    console.log(expenses)
    completeExpensesChart()
  }, [expenses])

  return (
    <>
      <Card size={1}>
        <label className="card__title">Total Projects</label>
        <hr />
        <label className="card__number">{projects?.length}</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Total Profit</label>
        <hr />
        <label className="card__number">{totalProfit} €</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Projects Canceled</label>
        <hr />
        <label className="card__number">
          {projects?.filter((m) => m.status === 'canceled').length}
        </label>
      </Card>

      <Card size={1}>
        <label className="card__title">Projects Completed</label>
        <hr />
        <label className="card__number">
          {projects?.filter((m) => m.status === 'done').length}
        </label>
      </Card>

      <Card size={2}>
        <label className="card__title">Project Category</label>
        <hr />
        <div
          style={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <PieChart
            colors={['#8CABFF', '#4477CE', '#512B81', '#35155D']}
            series={[
              {
                arcLabelMinAngle: 20,
                outerRadius: 80,
                data: projectCategoriesData,
                arcLabel: getArcLabel,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
              },
            }}
            height={200}
            width={200}
            margin={{ left: 90 }}
            legend={{ hidden: true }}
          />
        </div>
      </Card>

      <Card size={2}>
        <label className="card__title">Average Expenses</label>
        <hr />
        <div
          style={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <PieChart
            colors={['#AED8CC', '#CD6688', '#7A316F', '#461959']}
            series={[
              {
                arcLabelMinAngle: 30,
                outerRadius: 80,
                arcLabel: (item) => {
                  return item.label
                },
                data: projectExpensesData,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                fontSize: '.75rem',
              },
            }}
            height={200}
            width={200}
            margin={{ left: 90 }}
            legend={{ hidden: false }}
          />
        </div>
      </Card>

      <Card>
        <label className="card__title">Average Delivery</label>
        <hr />
        <label className="card__number">7 Days</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Project Expenses</label>
        <hr />
        <label className="card__number">{averageProjectExpenses}€</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Project Profit</label>
        <hr />
        <label className="card__number">{averageProjectProfit} €</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Project Price</label>
        <hr />
        <label className="card__number">{averageProjectPrice} €</label>
      </Card>

      <Card size={4}>
        <label className="card__title">Projects</label>
        <hr />

        <CustomTable
          rows={projects ? projects : []}
          cols={projectCols}
          showDetails={handleShowDetails}
        />
      </Card>
    </>
  )
}
