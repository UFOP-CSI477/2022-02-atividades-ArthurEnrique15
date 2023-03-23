import styled from 'styled-components'

export const ListItemContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20rem;

  padding: 1rem;

  border-radius: 6px;

  font-size: 1.5rem;
  font-weight: 700;

  background-color: ${({ theme }) => theme['base-input']};
`
