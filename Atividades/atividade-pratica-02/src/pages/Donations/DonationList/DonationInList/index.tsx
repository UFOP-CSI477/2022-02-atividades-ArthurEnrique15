import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../../constants/env'
import { ICollectionPlace } from '../../../../interfaces/ICollectionPlace'
import { IPerson } from '../../../../interfaces/IPerson'
import {
  DonationInListContainer,
  InputsContainer,
  ButtonContainer,
  EditButton,
  DeleteButton,
  SaveButton,
  FieldContainer,
  InputsRow,
  FormInput,
  FormSelect,
} from './styles'

interface DonationInListProps {
  id: number
  date: string
  personId: number
  collectionPlaceId: number
  persons: IPerson[]
  collectionPlaces: ICollectionPlace[]
  handleDeleteDonation: (id: number) => void
}

export function DonationInList({
  id,
  date: initialDate,
  personId: initialPerson,
  collectionPlaceId: initialCollectionPlace,
  persons,
  collectionPlaces,
  handleDeleteDonation,
}: DonationInListProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [date, setDate] = useState(new Date(initialDate).toLocaleDateString())
  const [selectedPerson, setSelectedPerson] = useState(initialPerson)
  const [selectedCollectionPlace, setSelectedCollectionPlace] = useState(
    initialCollectionPlace,
  )

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setDate(value)
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { id, value } = event.target

    const selectsActions = {
      person: () => setSelectedPerson(Number(value)),
      collectionPlace: () => setSelectedCollectionPlace(Number(value)),
    }

    selectsActions[id as keyof typeof selectsActions]()
  }

  function resetInputs() {
    setDate(new Date(initialDate).toLocaleDateString())
    setSelectedPerson(initialPerson)
    setSelectedCollectionPlace(initialCollectionPlace)
  }

  function handleStartEditing() {
    setIsEditing(true)
  }

  function handleFinishEditing() {
    if (
      date === new Date(initialDate).toLocaleDateString() &&
      selectedPerson === initialPerson &&
      selectedCollectionPlace === initialCollectionPlace
    ) {
      setIsEditing(false)
      return
    }

    const confirmed = window.confirm('Deseja realmente atualizar os dados?')

    if (confirmed) {
      axios
        .patch(
          `${serverUrl}/donation`,
          {
            date,
            personId: selectedPerson,
            collectionPlaceId: selectedCollectionPlace,
          },
          { headers: { id } },
        )
        .then(() => {
          alert('Dados atualizados com sucesso!')
        })
        .catch((error) => {
          alert('Erro ao atualizar dados')
          console.error(error)
          resetInputs()
        })
    } else {
      resetInputs()
    }
    setIsEditing(false)
  }

  function handleDelete() {
    const confirmed = window.confirm('Deseja realmente deletar este registro?')
    if (confirmed) {
      axios
        .delete(`${serverUrl}/donation`, { headers: { id } })
        .then(() => {
          alert('Registro deletado com sucesso!')
          handleDeleteDonation(id)
        })
        .catch((error) => {
          alert('Erro ao deletar registro')
          console.error(error)
        })
    }
  }

  return (
    <DonationInListContainer>
      <InputsContainer>
        <InputsRow>
          <FieldContainer>
            <label htmlFor="document">Data</label>
            <FormInput
              disabled={!isEditing}
              id="date"
              type="text"
              value={date}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="person">Pessoa</label>
            <FormSelect
              disabled={!isEditing}
              id="person"
              value={selectedPerson}
              onChange={handleSelectChange}
            >
              <option value="">Selecione uma pessoa</option>
              {persons.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.name}
                </option>
              ))}
            </FormSelect>
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="collectionPlace">Local de coleta</label>
            <FormSelect
              disabled={!isEditing}
              id="collectionPlace"
              value={selectedCollectionPlace}
              onChange={handleSelectChange}
            >
              <option value="">Selecione um local de coleta</option>
              {collectionPlaces.map((collectionPlace) => (
                <option key={collectionPlace.id} value={collectionPlace.id}>
                  {`${collectionPlace.name} - R. ${collectionPlace.street} número ${collectionPlace.number}`}
                </option>
              ))}
            </FormSelect>
          </FieldContainer>
        </InputsRow>
      </InputsContainer>

      <ButtonContainer>
        {isEditing ? (
          <SaveButton onClick={handleFinishEditing}>Salvar</SaveButton>
        ) : (
          <EditButton onClick={handleStartEditing}>Editar</EditButton>
        )}

        <DeleteButton onClick={handleDelete}>Deletar</DeleteButton>
      </ButtonContainer>
    </DonationInListContainer>
  )
}
