import Card from '../../components/ui/card/card'
import React from 'react'
import useProjects from '../../hooks/useProjects'
import CustomTable, {
  TableColProps,
} from '../../components/ui/tables/customTable/customTable'
import { useNavigate } from 'react-router-dom'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import { DefaultizedPieValueType } from '@mui/x-charts'

export default function Projects() {
  const { projects } = useProjects()
  const navigate = useNavigate()

  const projectCols = [
    { title: 'id', sortable: true },
    { title: 'projectTitle', sortable: true },
    { title: 'buyerEmail', sortable: true },
    { title: 'status', sortable: true },
  ]

  const handleShowDetails = (projectID: any) => {
    navigate(`/project/${projectID}`)
  }

  const data = [
    { value: 5, label: 'Ecommerce' },
    { value: 15, label: 'Dashboard' },
    { value: 30, label: 'Agency' },
    { value: 50, label: 'Portfolio' },
  ]

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0)

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL
    return `${(percent * 100).toFixed(0)}%`
  }

  return (
    <>
      <Card size={1}>
        <label className="card__title">Total Projects</label>
        <hr />
        <label className="card__number">410</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Average Price</label>
        <hr />
        <label className="card__number">1240 €</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Projects Canceled</label>
        <hr />
        <label className="card__number">24</label>
      </Card>

      <Card size={1}>
        <label className="card__title">Projects Completed</label>
        <hr />
        <label className="card__number">314</label>
      </Card>

      <Card size={1}>
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
