import React, { useEffect, useState } from 'react'

const useProjects = () => {
  const [projects, setProjects] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProjects = () => {
    setProjects([
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
      {
        id: 3,
        projectTitle: 'Brochure Web Agency',
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
