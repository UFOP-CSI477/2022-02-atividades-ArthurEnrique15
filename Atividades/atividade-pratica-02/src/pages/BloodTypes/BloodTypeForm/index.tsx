import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../constants/env'
import {
  FormContainer,
  InputsContainer,
  TitleContainer,
  BloodTypeFormContainer,
  SubmitButton,
  ButtonContainer,
  FormInput,
} from './styles'

export function BloodTypeForm() {
  const [type, setType] = useState('')
  const [factor, setFactor] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      type: () => setType(value),
      factor: () => setFactor(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    if (!type || !factor) {
      event.preventDefault()
      alert('Por favor, preencha todos os campos')
      return
    }

    axios
      .post(`${serverUrl}/blood-type`, { type, factor })
      .then((response) => {
        alert('Tipo sanguíneo cadastrado com sucesso')
      })
      .catch((error) => {
        console.error(error)
        alert('Houve um erro ao cadastrar o tipo sanguíneo')
      })
  }

  return (
    <BloodTypeFormContainer>
      <TitleContainer>
        <span>Cadastrar tipo sanguíneo</span>
      </TitleContainer>
      <FormContainer>
        <InputsContainer>
          <FormInput
            id="type"
            type="text"
            placeholder="Tipo"
            onChange={handleInputChange}
          />

          <FormInput
            id="factor"
            type="text"
            placeholder="Fator"
            onChange={handleInputChange}
          />
        </InputsContainer>

        <ButtonContainer>
          <SubmitButton type="submit" onClick={handleSubmitForm}>
            Cadastrar
          </SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </BloodTypeFormContainer>
  )
}
