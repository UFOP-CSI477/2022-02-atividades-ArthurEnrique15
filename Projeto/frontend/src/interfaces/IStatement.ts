export interface Statement {
  id: string
  value: number
  type: 'deposit' | 'withdraw'
  created_at: Date
  updated_at: Date
}
