import { useEffect, useState } from 'react'
import axios from 'axios'
import { DonationInList } from './DonationInList'
import { DonationListContainer, TitleContainer, ListContainer } from './styles'
import { serverUrl } from '../../../constants/env'
import { IDonation } from '../../../interfaces/IDonation'
import { ICollectionPlace } from '../../../interfaces/ICollectionPlace'
import { IPerson } from '../../../interfaces/IPerson'

interface DonationListProps {
  persons: IPerson[]
  collectionPlaces: ICollectionPlace[]
}

export function DonationList({ persons, collectionPlaces }: DonationListProps) {
  const [donations, setDonations] = useState<IDonation[]>([])

  useEffect(() => {
    axios
      .get(`${serverUrl}/donation/all`)
      .then((response) => {
        setDonations(response.data)
      })
      .catch((error) => {
        console.error(error.toString())
      })
  }, [])

  function handleDeleteDonation(id: number) {
    const donationsWithoutDeleted = donations.filter(
      (donation) => donation.id !== id,
    )

    setDonations(donationsWithoutDeleted)
  }

  return (
    <DonationListContainer>
      <TitleContainer>
        <span>Doações cadastradas</span>
      </TitleContainer>

      <ListContainer>
        {donations.map((donation) => (
          <DonationInList
            key={donation.id}
            id={donation.id}
            date={donation.date.toString()}
            personId={donation?.person?.id}
            collectionPlaceId={donation?.collectionPlace?.id}
            persons={persons}
            collectionPlaces={collectionPlaces}
            handleDeleteDonation={handleDeleteDonation}
          />
        ))}
      </ListContainer>
    </DonationListContainer>
  )
}
