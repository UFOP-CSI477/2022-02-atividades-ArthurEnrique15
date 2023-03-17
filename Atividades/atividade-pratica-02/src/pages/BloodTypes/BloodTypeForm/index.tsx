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
} from './styles'

export function BloodTypeForm() {
  const [type, setType] = useState('')
  const [factor, setFactor] = useState('')

  function handleTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setType(event.target.value)
  }

  function handleFactorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFactor(event.target.value)
  }

  function handleSubmitForm() {
    if (!type || !factor) {
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
          <input
            id="type"
            type="text"
            placeholder="Tipo"
            onChange={handleTypeChange}
          />

          <input
            id="factor"
            type="text"
            placeholder="Fator"
            onChange={handleFactorChange}
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
