import {
  BloodTypeInListContainer,
  InputsContainer,
  ButtonContainer,
  EditButton,
  DeleteButton,
} from './styles'

interface BloodTypeInListProps {
  id: number
  type: string
  factor: string
}

export function BloodTypeInList({ id, type, factor }: BloodTypeInListProps) {
  return (
    <BloodTypeInListContainer>
      <InputsContainer>
        <input disabled id="type" type="text" placeholder="Tipo" value={type} />
        <input
          disabled
          id="factor"
          type="text"
          placeholder="Fator"
          value={factor}
        />
      </InputsContainer>

      <ButtonContainer>
        <EditButton>Editar</EditButton>
        <DeleteButton>Deletar</DeleteButton>
      </ButtonContainer>
    </BloodTypeInListContainer>
  )
}
