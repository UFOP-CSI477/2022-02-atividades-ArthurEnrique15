import { ICollectionPlace } from './ICollectionPlace'
import { IPerson } from './IPerson'

export interface IDonation {
  id: number
  date: Date
  person: IPerson
  collectionPlace: ICollectionPlace
  created_at: Date
  updated_at: Date
}
