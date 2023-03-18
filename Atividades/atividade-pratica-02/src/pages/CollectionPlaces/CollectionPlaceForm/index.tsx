import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../constants/env'
import {
  FormContainer,
  InputsContainer,
  TitleContainer,
  CollectionPlaceFormContainer,
  SubmitButton,
  ButtonContainer,
  InputsRow,
  FormInput,
} from './styles'

export function CollectionPlaceForm() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [street, setStreet] = useState('')
  const [complement, setComplement] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      name: () => setName(value),
      number: () => setNumber(value),
      street: () => setStreet(value),
      complement: () => setComplement(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    if (!name || !number || !street || !complement) {
      event.preventDefault()
      alert('Por favor, preencha todos os campos')
      return
    }

    axios
      .post(`${serverUrl}/collection-place`, {
        name,
        number,
        street,
        complement,
      })
      .then((response) => {
        alert('Local de coleta cadastrado com sucesso')
      })
      .catch((error) => {
        console.error(error)
        alert('Houve um erro ao cadastrar o local de coleta')
      })
  }

  return (
    <CollectionPlaceFormContainer>
      <TitleContainer>
        <span>Cadastrar local de coleta</span>
      </TitleContainer>
      <FormContainer>
        <InputsContainer>
          <InputsRow>
            <FormInput
              id="name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={handleInputChange}
            />

            <FormInput
              id="number"
              type="number"
              placeholder="Número"
              value={number}
              onChange={handleInputChange}
            />
          </InputsRow>

          <InputsRow>
            <FormInput
              id="street"
              type="text"
              placeholder="Rua"
              value={street}
              onChange={handleInputChange}
            />

            <FormInput
              id="complement"
              type="text"
              placeholder="Complemento"
              value={complement}
              onChange={handleInputChange}
            />
          </InputsRow>
        </InputsContainer>

        <ButtonContainer>
          <SubmitButton type="submit" onClick={handleSubmitForm}>
            Cadastrar
          </SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </CollectionPlaceFormContainer>
  )
}
