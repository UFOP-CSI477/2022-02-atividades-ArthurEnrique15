import { CollectionPlaceForm } from './CollectionPlaceForm'
import { CollectionPlaceList } from './CollectionPlaceList'
import { CollectionPlaceContainer } from './styles'

export function CollectionPlaces() {
  return (
    <CollectionPlaceContainer>
      <CollectionPlaceForm></CollectionPlaceForm>
      <CollectionPlaceList></CollectionPlaceList>
    </CollectionPlaceContainer>
  )
}
