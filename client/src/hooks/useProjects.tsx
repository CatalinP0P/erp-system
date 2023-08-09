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
        category: 'portfolio',
        price: 1200,
      },
      {
        id: 2,
        title: 'Ecommerce Web App',
        buyerEmail: 'john@gmail.com',
        status: 'doing',
        category: 'ecommerce',
        price: 4000,
      },
      {
        id: 3,
        title: 'Brochure Web Agency',
        buyerEmail: 'john@gmail.com',
        status: 'canceled',
        category: 'brochure',
        price: 22000,
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
