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
  FieldContainer,
  FormInput,
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

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      type: () => setType(value),
      factor: () => setFactor(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
  }

  function resetInputs() {
    setType(initialType)
    setFactor(initialFactor)
  }

  function handleStartEditing() {
    setIsEditing(true)
  }

  function handleFinishEditing() {
    if (type === initialType && factor === initialFactor) {
      setIsEditing(false)
      return
    }

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
    const confirmed = window.confirm('Deseja realmente deletar este registro?')
    if (confirmed) {
      axios
        .delete(`${serverUrl}/blood-type`, { headers: { id } })
        .then(() => {
          alert('Registro deletado com sucesso!')
          handleDeleteBloodType(id)
        })
        .catch((error) => {
          alert('Erro ao deletar registro')
          console.error(error)
        })
    }
  }

  return (
    <BloodTypeInListContainer>
      <InputsContainer>
        <FieldContainer>
          <label htmlFor="type">Tipo</label>
          <FormInput
            disabled={!isEditing}
            id="type"
            type="text"
            placeholder="Tipo"
            value={type}
            onChange={handleInputChange}
          />
        </FieldContainer>

        <FieldContainer>
          <label htmlFor="factor">Fator</label>
          <FormInput
            disabled={!isEditing}
            id="factor"
            type="text"
            placeholder="Fator"
            value={factor}
            onChange={handleInputChange}
          />
        </FieldContainer>
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
