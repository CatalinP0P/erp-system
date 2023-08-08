import Card from '../../components/ui/card/card'
import React, { useEffect } from 'react'
import useProjects from '../../hooks/useProjects'
import CustomTable, {
  TableColProps,
} from '../../components/ui/tables/customTable/customTable'
import { execFile } from 'child_process'
import { KeyboardReturnOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const { projects } = useProjects()
  const navigate = useNavigate()

  const projectCols: TableColProps[] = [
    { title: 'id', sortable: true },
    { title: 'projectTitle', sortable: true },
    { title: 'buyerEmail', sortable: true },
    { title: 'status', sortable: true },
  ]

  const handleShowDetails = (projectID: string) => {
    navigate(`/project/${projectID}`)
  }

  return (
    <Card size={4}>
      <label className="card__title">Projects</label>
      <hr />
      <CustomTable
        rows={projects ? projects : []}
        cols={projectCols}
        showDetails={handleShowDetails}
      />
    </Card>
  )
}
