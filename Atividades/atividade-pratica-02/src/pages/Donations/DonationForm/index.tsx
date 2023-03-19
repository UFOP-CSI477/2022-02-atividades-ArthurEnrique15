import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../constants/env'
import { ICollectionPlace } from '../../../interfaces/ICollectionPlace'
import { IPerson } from '../../../interfaces/IPerson'
import {
  FormContainer,
  InputsContainer,
  TitleContainer,
  DonationFormContainer,
  SubmitButton,
  ButtonContainer,
  InputsRow,
  FormInput,
  FormSelect,
} from './styles'

interface DonationFormProps {
  persons: IPerson[]
  collectionPlaces: ICollectionPlace[]
}

export function DonationForm({ persons, collectionPlaces }: DonationFormProps) {
  const [date, setDate] = useState('')
  const [selectedPerson, setSelectedPerson] = useState('')
  const [selectedCollectionPlace, setSelectedCollectionPlace] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setDate(value)
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { id, value } = event.target

    const selectsActions = {
      person: () => setSelectedPerson(value),
      collectionPlace: () => setSelectedCollectionPlace(value),
    }

    selectsActions[id as keyof typeof selectsActions]()
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    if (!date || selectedPerson === '' || selectedCollectionPlace === '') {
      event.preventDefault()
      alert('Por favor, preencha todos os campos')
      return
    }

    axios
      .post(`${serverUrl}/donation`, {
        date: new Date(date),
        personId: Number(selectedPerson),
        collectionPlaceId: Number(selectedCollectionPlace),
      })
      .then((response) => {
        alert('Cadastro realizado com sucesso')
      })
      .catch((error) => {
        console.error(error)
        alert('Houve um erro ao cadastrar')
      })
  }

  return (
    <DonationFormContainer>
      <TitleContainer>
        <span>Cadastrar doação</span>
      </TitleContainer>
      <FormContainer>
        <InputsContainer>
          <InputsRow>
            <FormInput
              id="date"
              type="text"
              placeholder="Date"
              value={date}
              onChange={handleInputChange}
            />

            <FormSelect
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

            <FormSelect
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
          </InputsRow>
        </InputsContainer>

        <ButtonContainer>
          <SubmitButton type="submit" onClick={handleSubmitForm}>
            Cadastrar
          </SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </DonationFormContainer>
  )
}
