import styled from 'styled-components'

export const PersonListContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 0.75rem;
`

export const TitleContainer = styled.div`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.5rem;

  margin-bottom: 0.25rem;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  width: 100%;
`
