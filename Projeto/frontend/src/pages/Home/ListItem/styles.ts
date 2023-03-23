import styled from 'styled-components'

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

  gap: 2rem;

  width: 50rem;

  padding: 1rem 3rem;

  border-radius: 6px;

  /* font-size: 1.5rem;
  font-weight: 700; */

  background-color: ${({ theme }) => theme['base-input']};
`

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`
export const ValueContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem;
  min-width: 5rem;
`
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`
