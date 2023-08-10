export interface ProjectProps {
  id: number
  title: string
  buyerEmail: string
  status: string
  category: string
  price: number
}

export const projectCategories = [
  'service',
  'ecommerce',
  'portfolio',
  'dashboard',
  'other',
]
