import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../../constants/env'
import {
  CollectionPlaceInListContainer,
  InputsContainer,
  ButtonContainer,
  EditButton,
  DeleteButton,
  SaveButton,
  FieldContainer,
  InputsRow,
  FormInput,
} from './styles'

interface CollectionPlaceInListProps {
  id: number
  name: string
  number: number
  street: string
  complement: string
  handleDeleteCollectionPlace: (id: number) => void
}

export function CollectionPlaceInList({
  id,
  name: initialName,
  number: initialNumber,
  street: initialStreet,
  complement: initialComplement,
  handleDeleteCollectionPlace,
}: CollectionPlaceInListProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(initialName)
  const [number, setNumber] = useState(initialNumber)
  const [street, setStreet] = useState(initialStreet)
  const [complement, setComplement] = useState(initialComplement)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      name: () => setName(value),
      number: () => setNumber(Number(value)),
      street: () => setStreet(value),
      complement: () => setComplement(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
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
      name === initialName &&
      number === initialNumber &&
      street === initialStreet &&
      complement === initialComplement
    ) {
      setIsEditing(false)
      return
    }
    const confirmed = window.confirm('Deseja realmente atualizar os dados?')
    if (confirmed) {
      axios
        .patch(
          `${serverUrl}/collection-place`,
          { name, number, street, complement },
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
        .delete(`${serverUrl}/collection-place`, { headers: { id } })
        .then(() => {
          alert('Registro deletado com sucesso!')
          handleDeleteCollectionPlace(id)
        })
        .catch((error) => {
          alert('Erro ao deletar registro')
          console.error(error)
        })
    }
  }

  return (
    <CollectionPlaceInListContainer>
      <InputsContainer>
        <InputsRow>
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

          <FieldContainer>
            <label htmlFor="number">Número</label>
            <FormInput
              disabled={!isEditing}
              id="number"
              type="number"
              value={number}
              onChange={handleInputChange}
            />
          </FieldContainer>
        </InputsRow>

        <InputsRow>
          <FieldContainer>
            <label htmlFor="street">Rua</label>
            <FormInput
              disabled={!isEditing}
              id="street"
              type="text"
              value={street}
              onChange={handleInputChange}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="complement">Complemento</label>
            <FormInput
              disabled={!isEditing}
              id="complement"
              type="text"
              value={complement}
              onChange={handleInputChange}
            />
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
    </CollectionPlaceInListContainer>
  )
}
