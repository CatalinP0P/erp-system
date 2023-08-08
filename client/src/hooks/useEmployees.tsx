import { useEffect, useState } from 'react'
import { EmployeeProps } from '../types/employee'

const useEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchEmployes = () => {
    setEmployees([])
    setLoading(false)
  }

  useEffect(() => {
    fetchEmployes()
  }, [])

  return { employees, loading }
}

export default useEmployees
