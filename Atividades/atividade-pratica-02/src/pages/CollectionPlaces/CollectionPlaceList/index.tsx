import { useEffect, useState } from 'react'
import axios from 'axios'
import { CollectionPlaceInList } from './CollectionPlaceInList'
import {
  CollectionPlaceListContainer,
  TitleContainer,
  ListContainer,
} from './styles'
import { serverUrl } from '../../../constants/env'
import { ICollectionPlace } from '../../../interfaces/ICollectionPlace'

export function CollectionPlaceList() {
  const [collectionPlaces, setCollectionPlaces] = useState<ICollectionPlace[]>(
    [],
  )

  useEffect(() => {
    axios
      .get(`${serverUrl}/collection-place/all`)
      .then((response) => {
        setCollectionPlaces(response.data)
      })
      .catch((error) => {
        console.error(error.toString())
      })
  }, [])

  function handleDeleteCollectionPlace(id: number) {
    const collectionPlacesWithoutDeleted = collectionPlaces.filter(
      (collectionPlace) => collectionPlace.id !== id,
    )

    setCollectionPlaces(collectionPlacesWithoutDeleted)
  }

  return (
    <CollectionPlaceListContainer>
      <TitleContainer>
        <span>Locais de coleta cadastrados</span>
      </TitleContainer>

      <ListContainer>
        {collectionPlaces.map((collectionPlace) => (
          <CollectionPlaceInList
            key={collectionPlace.id}
            id={collectionPlace.id}
            name={collectionPlace.name}
            number={collectionPlace.number}
            street={collectionPlace.street}
            complement={collectionPlace.complement}
            handleDeleteCollectionPlace={handleDeleteCollectionPlace}
          />
        ))}
      </ListContainer>
    </CollectionPlaceListContainer>
  )
}
