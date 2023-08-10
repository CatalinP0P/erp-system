import React, { useEffect } from 'react'
import { useContext, createContext, useState } from 'react'
import { EmployeeProps } from '../types/employee'
import { ProjectProps } from '../types/project'
import axios from 'axios'
import { TextRotationAngleupRounded } from '@mui/icons-material'
import { ExpenseProps } from '../types/expense'

interface contextProps {
  projects: ProjectProps[] | null
  employees: EmployeeProps[] | null
  averageProjectPrice: number | null
  minimumEmployeeSalary: number | null
  averageEmployeeSalary: number | null
  totalEarnings: number | null
  averageProjectProfit: number | null
  totalProfit: number | null
  totalExpenses: number | null
  averageProjectExpenses: number | null
  expenses: ExpenseProps[] | null
}

const DatabaseContext = createContext<contextProps>({
  projects: null,
  employees: null,
  averageProjectPrice: null,
  minimumEmployeeSalary: null,
  averageEmployeeSalary: null,
  totalEarnings: null,
  averageProjectProfit: null,
  totalProfit: null,
  totalExpenses: null,
  averageProjectExpenses: null,
  expenses: null,
})

export const useDatabase = () => {
  return useContext(DatabaseContext)
}

export const DatabaseProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [projects, setProjects] = useState<ProjectProps[] | null>(null)
  const [employees, setEmployees] = useState<EmployeeProps[] | null>(null)
  const [minimumEmployeeSalary, setMinimumEmployeeSalary] = useState<
    number | null
  >(null)
  const [averageEmployeeSalary, setAverageEmployeeSalary] = useState<
    number | null
  >(null)
  const [averageProjectPrice, setAverageProjectPrice] = useState<number | null>(
    null
  )
  const [totalEarnings, setTotalEarnings] = useState<number | null>(null)
  const [averageProjectProfit, setAverageProjectProfit] = useState<
    number | null
  >(null)
  const [totalProfit, setTotalProfit] = useState<number | null>(null)
  const [totalExpenses, setTotalExpenses] = useState<number | null>(null)
  const [averageProjectExpenses, setAverageProjectExpenses] = useState<
    number | null
  >(null)

  const [expenses, setExpenses] = useState(null)

  const req = axios.create({ baseURL: 'http://127.0.0.1:3001/' })

  const fetchProjects = async () => {
    try {
      const projects = await req.get('/projects')
      console.log('Calling the server for projects')
      setProjects(projects.data)
      const averagePrice = await req.get('/projects/average/price')
      setAverageProjectPrice(averagePrice.data)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchEmployees = async () => {
    try {
      const employees = await req.get('/employees')
      console.log('Calling the server for employees')
      setEmployees(employees.data)
      const averageSalary = await req.get('/employees/average/salary')
      setAverageEmployeeSalary(averageSalary.data)
      const minSalary = await req.get('/employees/min/salary')
      setMinimumEmployeeSalary(minSalary.data)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchEarnings = async () => {
    const total = await req.get('/earnings')
    setTotalEarnings(total.data)
    const profit = await req.get('/earnings/profit')
    setTotalProfit(profit.data)
    const averageProject = await req.get('/earnings/profit/average/project')
    setAverageProjectProfit(averageProject.data)
  }

  const fetchExpenses = async () => {
    const all = await req.get('/expenses')
    setExpenses(all.data)
    const total = await req.get('/expenses/total')
    setTotalExpenses(total.data)
    const averageProject = await req.get('/expenses/average')
    setAverageProjectExpenses(averageProject.data)
  }

  const fetchData = () => {
    fetchProjects()
    fetchEmployees()
    fetchEarnings()
    fetchExpenses()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <DatabaseContext.Provider
      value={{
        projects,
        employees,
        averageProjectPrice,
        minimumEmployeeSalary,
        averageEmployeeSalary,
        totalEarnings,
        averageProjectProfit,
        totalProfit,
        totalExpenses,
        averageProjectExpenses,
        expenses,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  )
}
