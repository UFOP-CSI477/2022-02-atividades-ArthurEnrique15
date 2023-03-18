import { IBloodType } from './IBloodType'

export interface IPerson {
  id: number
  document: string
  name: string
  number?: number
  complement?: string
  street?: string
  bloodType: IBloodType
  created_at: Date
  updated_at: Date
}
