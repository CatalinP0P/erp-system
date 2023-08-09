import Card from '../../components/ui/card/card'
import React, { useEffect } from 'react'
import useProjects from '../../hooks/useProjects'
import CustomTable from '../../components/ui/tables/customTable/customTable'
import { useNavigate } from 'react-router-dom'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import { DefaultizedPieValueType } from '@mui/x-charts'
import { useDatabase } from '../../context/databaseContext'

export default function Projects() {
  const { projects } = useDatabase()
  const navigate = useNavigate()

  const projectCols = [
    { title: 'id', sortable: true },
    { title: 'title', sortable: true },
    { title: 'buyerEmail', sortable: true },
    { title: 'status', sortable: true },
  ]

  const handleShowDetails = (projectID: number) => {
    navigate(`/project/${projectID}`)
  }

  const data = [
    { value: 5, label: 'Ecommerce' },
    { value: 15, label: 'Dashboard' },
    { value: 30, label: 'Agency' },
    { value: 50, label: 'Portfolio' },
  ]

  const averageExpenses = [
    { value: 5, label: 'Hosting' },
    { value: 25, label: 'Services' },
    { value: 25, label: 'Database Storage' },
    { value: 35, label: 'Labour' },
  ]

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0)

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL
    return `${(percent * 100).toFixed(0)}%`
  }

  useEffect(() => {
    console.log(projects)
  })

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
        <label className="card__number">231.000 €</label>
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
                data,
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
                data: averageExpenses,
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
        <label className="card__number">620 €</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Project Profit</label>
        <hr />
        <label className="card__number">1120 €</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Project Price</label>
        <hr />
        <label className="card__number">1840 €</label>
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
