import { useEffect, useState } from 'react'
import { EmployeeProps } from '../types/employee'

const useEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchEmployes = () => {
    setEmployees([
      {
        id: '1',
        name: 'Pop Catalin',
        email: 'catalinpce@gmail.com',
        signDate: new Date(),
        salary: 2400,
      },
      {
        id: '2',
        name: 'John Mike',
        email: 'john@gmail.com',
        signDate: new Date(),
        salary: 1800,
      },
    ])
    setLoading(false)
  }

  useEffect(() => {
    fetchEmployes()
  }, [])

  return { employees, loading }
}

export default useEmployees
