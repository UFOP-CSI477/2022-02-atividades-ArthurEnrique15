import axios from 'axios'
import React, { useState } from 'react'
import { serverUrl } from '../../../../constants/env'
import {
  BloodTypeInListContainer,
  InputsContainer,
  ButtonContainer,
  EditButton,
  DeleteButton,
  SaveButton,
} from './styles'

interface BloodTypeInListProps {
  id: number
  type: string
  factor: string
  handleDeleteBloodType: (id: number) => void
}

export function BloodTypeInList({
  id,
  type: initialType,
  factor: initialFactor,
  handleDeleteBloodType,
}: BloodTypeInListProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [type, setType] = useState(initialType)
  const [factor, setFactor] = useState(initialFactor)

  function handleTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setType(event.target.value)
  }

  function handleFactorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFactor(event.target.value)
  }

  function resetInputs() {
    setType(initialType)
    setFactor(initialFactor)
  }

  function handleStartEditing() {
    setIsEditing(true)
  }

  function handleFinishEditing() {
    const confirmed = window.confirm('Deseja realmente atualizar os dados?')
    if (confirmed) {
      axios
        .patch(`${serverUrl}/blood-type`, { type, factor }, { headers: { id } })
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
    const confirmed = window.confirm(
      'Deseja realmente deletar este tipo sanguíneo?',
    )
    if (confirmed) {
      axios
        .delete(`${serverUrl}/blood-type`, { headers: { id } })
        .then(() => {
          alert('Tipo sanguíneo deletado com sucesso!')
          handleDeleteBloodType(id)
        })
        .catch((error) => {
          alert('Erro ao deletar tipo sanguíneo')
          console.error(error)
        })
    }
  }

  return (
    <BloodTypeInListContainer>
      <InputsContainer>
        <input
          disabled={!isEditing}
          id="type"
          type="text"
          placeholder="Tipo"
          value={type}
          onChange={handleTypeChange}
        />
        <input
          disabled={!isEditing}
          id="factor"
          type="text"
          placeholder="Fator"
          value={factor}
          onChange={handleFactorChange}
        />
      </InputsContainer>

      <ButtonContainer>
        {isEditing ? (
          <SaveButton onClick={handleFinishEditing}>Salvar</SaveButton>
        ) : (
          <EditButton onClick={handleStartEditing}>Editar</EditButton>
        )}

        <DeleteButton onClick={handleDelete}>Deletar</DeleteButton>
      </ButtonContainer>
    </BloodTypeInListContainer>
  )
}
