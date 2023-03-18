import { useEffect, useState } from 'react'
import axios from 'axios'
import { PersonInList } from './PersonInList'
import { PersonListContainer, TitleContainer, ListContainer } from './styles'
import { serverUrl } from '../../../constants/env'
import { IPerson } from '../../../interfaces/IPerson'
import { IBloodType } from '../../../interfaces/IBloodType'

interface PersonListProps {
  bloodTypes: IBloodType[]
}

export function PersonList({ bloodTypes }: PersonListProps) {
  const [persons, setPersons] = useState<IPerson[]>([])

  useEffect(() => {
    axios
      .get(`${serverUrl}/person/all`)
      .then((response) => {
        setPersons(response.data)
      })
      .catch((error) => {
        console.error(error.toString())
      })
  }, [])

  function handleDeletePerson(id: number) {
    const personsWithoutDeleted = persons.filter((person) => person.id !== id)

    setPersons(personsWithoutDeleted)
  }

  return (
    <PersonListContainer>
      <TitleContainer>
        <span>Pessoas cadastradas</span>
      </TitleContainer>

      <ListContainer>
        {persons.map((person) => (
          <PersonInList
            key={person.id}
            id={person.id}
            document={person.document}
            name={person.name}
            number={person.number}
            street={person.street}
            complement={person.complement}
            bloodTypeId={person?.bloodType?.id}
            bloodTypes={bloodTypes}
            handleDeletePerson={handleDeletePerson}
          />
        ))}
      </ListContainer>
    </PersonListContainer>
  )
}
