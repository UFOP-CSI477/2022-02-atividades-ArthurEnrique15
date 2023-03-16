import {
  FormContainer,
  InputsContainer,
  TitleContainer,
  BloodTypeFormContainer,
  SubmitButton,
  ButtonContainer,
} from './styles'

export function BloodTypeForm() {
  return (
    <BloodTypeFormContainer>
      <TitleContainer>
        <span>Cadastrar tipo sanguíneo</span>
      </TitleContainer>
      <FormContainer>
        <InputsContainer>
          <input id="type" type="text" placeholder="Tipo" />
          <input id="factor" type="text" placeholder="Fator" />
        </InputsContainer>

        <ButtonContainer>
          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </BloodTypeFormContainer>
  )
}
