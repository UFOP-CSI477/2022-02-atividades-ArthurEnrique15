import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../constants/env'
import {
  FormContainer,
  TitleContainer,
  InputsContainer,
  FieldContainer,
  FormInput,
  ButtonContainer,
  SubmitButton,
  FormSelect,
} from './styles'

interface CreateItemFormProps {
  token: string
}

export function CreateItemForm({ token }: CreateItemFormProps) {
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const [selectedType, setSelectedType] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      value: () => setValue(value),
      description: () => setDescription(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target
    setSelectedType(value)
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    if (!value || !description || selectedType === '') {
      event.preventDefault()
      alert('Por favor, preencha todos os campos')
      return
    }

    axios
      .post(
        `${serverUrl}/statement`,
        {
          value: Number(value),
          description,
          type: selectedType,
        },
        { headers: { token } },
      )
      .then((response) => {
        alert('Lançamento cadastrado com sucesso')
      })
      .catch((error) => {
        console.error(error)
        alert('Erro ao cadastrar lançamento')
      })
  }

  return (
    <FormContainer>
      <TitleContainer>
        <span>Criar lançamento</span>
      </TitleContainer>
      <InputsContainer>
        <FieldContainer>
          <label htmlFor="value">Valor</label>
          <FormInput
            id="value"
            type="number"
            value={value}
            onChange={handleInputChange}
          />
        </FieldContainer>

        <FieldContainer>
          <label htmlFor="description">Descrição</label>
          <FormInput
            id="description"
            type="text"
            value={description}
            onChange={handleInputChange}
          />
        </FieldContainer>

        <FieldContainer>
          <label htmlFor="type">Tipo de lançamento</label>
          <FormSelect
            id="type"
            value={selectedType}
            onChange={handleSelectChange}
          >
            <option value="">Selecione o tipo de lançamento</option>
            <option value="deposit">Depósito</option>
            <option value="withdraw">Retirada</option>
          </FormSelect>
        </FieldContainer>
      </InputsContainer>

      <ButtonContainer>
        <SubmitButton type="submit" onClick={handleSubmitForm}>
          Cadastrar
        </SubmitButton>
      </ButtonContainer>
    </FormContainer>
  )
}
