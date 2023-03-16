import {
  BloodTypeInListContainer,
  InputsContainer,
  ButtonContainer,
  EditButton,
  DeleteButton,
} from './styles'

export function BloodTypeInList() {
  return (
    <BloodTypeInListContainer>
      <InputsContainer>
        <input id="type" type="text" placeholder="Tipo" />
        <input id="factor" type="text" placeholder="Fator" />
      </InputsContainer>

      <ButtonContainer>
        <EditButton>Editar</EditButton>
        <DeleteButton>Deletar</DeleteButton>
      </ButtonContainer>
    </BloodTypeInListContainer>
  )
}
