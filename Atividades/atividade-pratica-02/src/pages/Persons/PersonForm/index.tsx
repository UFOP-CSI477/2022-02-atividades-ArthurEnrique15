import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../constants/env'
import { IBloodType } from '../../../interfaces/IBloodType'
import {
  FormContainer,
  InputsContainer,
  TitleContainer,
  PersonFormContainer,
  SubmitButton,
  ButtonContainer,
  InputsRow,
  FormInput,
  FormSelect,
} from './styles'

interface PersonFormProps {
  bloodTypes: IBloodType[]
}

export function PersonForm({ bloodTypes }: PersonFormProps) {
  const [document, setDocument] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [street, setStreet] = useState('')
  const [complement, setComplement] = useState('')
  const [selectedBloodType, setSelectedBloodType] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      document: () => setDocument(value),
      name: () => setName(value),
      number: () => setNumber(value),
      street: () => setStreet(value),
      complement: () => setComplement(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target
    setSelectedBloodType(value)
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    if (!document || !name) {
      event.preventDefault()
      alert(
        'Por favor, preencha todos os campos obrigatórios (documento e nome)',
      )
      return
    }

    axios
      .post(`${serverUrl}/person`, {
        document,
        name,
        number,
        street,
        complement,
        bloodTypeId: Number(selectedBloodType),
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
    <PersonFormContainer>
      <TitleContainer>
        <span>Cadastrar pessoa</span>
      </TitleContainer>
      <FormContainer>
        <InputsContainer>
          <InputsRow>
            <FormInput
              id="document"
              type="text"
              placeholder="Documento"
              value={document}
              onChange={handleInputChange}
            />

            <FormInput
              id="name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={handleInputChange}
            />
          </InputsRow>

          <InputsRow>
            <FormInput
              id="number"
              type="number"
              placeholder="Número"
              value={number}
              onChange={handleInputChange}
            />

            <FormInput
              id="street"
              type="text"
              placeholder="Rua"
              value={street}
              onChange={handleInputChange}
            />
          </InputsRow>

          <InputsRow>
            <FormInput
              id="complement"
              type="text"
              placeholder="Complemento"
              value={complement}
              onChange={handleInputChange}
            />

            <FormSelect
              id="bloodType"
              value={selectedBloodType}
              onChange={handleSelectChange}
            >
              <option value="">Selecione um tipo sanguíneo</option>
              {bloodTypes.map((bloodType) => (
                <option key={bloodType.id} value={bloodType.id}>
                  {bloodType.type + bloodType.factor}
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
    </PersonFormContainer>
  )
}
