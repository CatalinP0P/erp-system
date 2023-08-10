export interface ExpenseProps {
  value: number
  projectId: string
  category: string
  details: string
}

export const expenseCategories = [
  'labour',
  'data storage',
  'service',
  'hosting',
  'others',
]
