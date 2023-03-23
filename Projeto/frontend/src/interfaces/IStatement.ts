export interface Statement {
  id: string
  value: number
  type: 'deposit' | 'withdraw'
  description: string
  createdAt: Date
  updatedAt: Date
}
