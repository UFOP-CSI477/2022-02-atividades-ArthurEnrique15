import styled from 'styled-components'

export const DonationInListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.5rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  padding: 1rem;

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

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const FormInput = styled.input`
  width: 100%;
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

  &:disabled {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const FormSelect = styled.select`
  width: 100%;
  height: 2.5rem;
  color: ${(props) => props.theme['base-title']};

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

  &:disabled {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`

const BaseButton = styled.button`
  width: 10rem;
  height: 2.5rem;

  border-radius: 6px;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};

  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  transition: 0.2s;
`

export const EditButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.yellow};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const DeleteButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.red};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['red-dark']};
  }
`

export const SaveButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.green};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['green-dark']};
  }
`
