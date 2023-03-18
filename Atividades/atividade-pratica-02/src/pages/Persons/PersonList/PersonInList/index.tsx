import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../../constants/env'
import { IBloodType } from '../../../../interfaces/IBloodType'
import {
  PersonInListContainer,
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

interface PersonInListProps {
  id: number
  document: string
  name: string
  number?: number
  street?: string
  complement?: string
  bloodTypeId?: number
  bloodTypes: IBloodType[]
  handleDeletePerson: (id: number) => void
}

export function PersonInList({
  id,
  document: initialDocument,
  name: initialName,
  number: initialNumber,
  street: initialStreet,
  complement: initialComplement,
  bloodTypeId: initialBloodTypeId,
  bloodTypes,
  handleDeletePerson,
}: PersonInListProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [document, setDocument] = useState(initialDocument)
  const [name, setName] = useState(initialName)
  const [number, setNumber] = useState(initialNumber)
  const [street, setStreet] = useState(initialStreet)
  const [complement, setComplement] = useState(initialComplement)
  const [selectedBloodType, setSelectedBloodType] = useState(initialBloodTypeId)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      document: () => setDocument(value),
      name: () => setName(value),
      number: () => setNumber(Number(value)),
      street: () => setStreet(value),
      complement: () => setComplement(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target
    setSelectedBloodType(Number(value))
  }

  function resetInputs() {
    setName(initialName)
    setNumber(initialNumber)
    setStreet(initialStreet)
    setComplement(initialComplement)
  }

  function handleStartEditing() {
    setIsEditing(true)
  }

  function handleFinishEditing() {
    if (
      document === initialDocument &&
      name === initialName &&
      number === initialNumber &&
      street === initialStreet &&
      complement === initialComplement &&
      selectedBloodType === initialBloodTypeId
    ) {
      setIsEditing(false)
      return
    }

    console.log({
      document,
      name,
      number,
      street,
      complement,
      bloodTypeId: selectedBloodType !== -1 ? selectedBloodType : null,
    })

    const confirmed = window.confirm('Deseja realmente atualizar os dados?')

    if (confirmed) {
      axios
        .patch(
          `${serverUrl}/person`,
          {
            document,
            name,
            number,
            street,
            complement,
            bloodTypeId: selectedBloodType !== -1 ? selectedBloodType : null,
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
        .delete(`${serverUrl}/person`, { headers: { id } })
        .then(() => {
          alert('Registro deletado com sucesso!')
          handleDeletePerson(id)
        })
        .catch((error) => {
          alert('Erro ao deletar registro')
          console.error(error)
        })
    }
  }

  return (
    <PersonInListContainer>
      <InputsContainer>
        <InputsRow>
          <FieldContainer>
            <label htmlFor="document">Documento</label>
            <FormInput
              disabled={!isEditing}
              id="document"
              type="text"
              value={document}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="name">Nome</label>
            <FormInput
              disabled={!isEditing}
              id="name"
              type="text"
              value={name}
              onChange={handleInputChange}
            />
          </FieldContainer>
        </InputsRow>

        <InputsRow>
          <FieldContainer>
            <label htmlFor="number">Número</label>
            <FormInput
              disabled={!isEditing}
              id="number"
              type="number"
              value={number ?? ''}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="street">Rua</label>
            <FormInput
              disabled={!isEditing}
              id="street"
              type="text"
              value={street ?? ''}
              onChange={handleInputChange}
            />
          </FieldContainer>
        </InputsRow>

        <InputsRow>
          <FieldContainer>
            <label htmlFor="complement">Complemento</label>
            <FormInput
              disabled={!isEditing}
              id="complement"
              type="text"
              value={complement ?? ''}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="bloodType">Tipo sanguíneo</label>
            <FormSelect
              disabled={!isEditing}
              id="bloodType"
              value={selectedBloodType}
              onChange={handleSelectChange}
            >
              <option value={-1}>Desconhecido</option>
              {bloodTypes.map((bloodType) => (
                <option key={bloodType.id} value={bloodType.id}>
                  {bloodType.type + bloodType.factor}
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
    </PersonInListContainer>
  )
}
