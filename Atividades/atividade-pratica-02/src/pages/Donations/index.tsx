import axios from 'axios'
import { useState, useEffect } from 'react'
import { serverUrl } from '../../constants/env'
import { ICollectionPlace } from '../../interfaces/ICollectionPlace'
import { IPerson } from '../../interfaces/IPerson'
import { DonationForm } from './DonationForm'
import { DonationList } from './DonationList'
import { DonationContainer } from './styles'

export function Donations() {
  const [persons, setPersons] = useState<IPerson[]>([])
  const [collectionPlaces, setCollectionPlaces] = useState<ICollectionPlace[]>(
    [],
  )

  useEffect(() => {
    axios
      .get(`${serverUrl}/person/all`)
      .then((response) => {
        setPersons(response.data)
      })
      .catch((error) => {
        console.error(error.toString())
      })

    axios
      .get(`${serverUrl}/collection-place/all`)
      .then((response) => {
        setCollectionPlaces(response.data)
      })
      .catch((error) => {
        console.error(error.toString())
      })
  }, [])

  return (
    <DonationContainer>
      <DonationForm
        persons={persons}
        collectionPlaces={collectionPlaces}
      ></DonationForm>
      <DonationList
        persons={persons}
        collectionPlaces={collectionPlaces}
      ></DonationList>
    </DonationContainer>
  )
}
