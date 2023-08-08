import { useEffect, useState } from 'react'
import { ProjectProps } from '../types/project'

const useProjects = () => {
  const [projects, setProjects] = useState<ProjectProps[] | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProjects = () => {
    setProjects([
      {
        id: 1,
        title: 'Portfolio Web Page',
        buyerEmail: 'catalinpce@gmail.com',
        status: 'done',
      },
      {
        id: 2,
        title: 'Ecommerce Web App',
        buyerEmail: 'john@gmail.com',
        status: 'doing',
      },
      {
        id: 3,
        title: 'Brochure Web Agency',
        buyerEmail: 'john@gmail.com',
        status: 'canceled',
      },
    ])
    setLoading(false)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return { projects, loading }
}

export default useProjects
