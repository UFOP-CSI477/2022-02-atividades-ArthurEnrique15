import styled from 'styled-components'

export const DonationFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.75rem;

  width: 100%;
`

export const TitleContainer = styled.div`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.5rem;

  margin-bottom: 0.25rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.5rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  padding: 1.5rem;

  width: 100%;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const InputsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const FormInput = styled.input`
  width: 50%;
  height: 2.5rem;
  color: ${(props) => props.theme['base-text']};

  background-color: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: 0.75rem;

  transition: 0.1s;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormSelect = styled.select`
  width: 50%;
  height: 2.5rem;
  color: ${(props) => props.theme['base-text']};

  background-color: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: 0.5rem;

  transition: 0.1s;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubmitButton = styled.button`
  width: 15rem;
  height: 2.5rem;

  border-radius: 6px;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.green};

  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['green-dark']};
  }
`
