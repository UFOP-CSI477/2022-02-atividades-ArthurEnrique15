import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5rem;

  padding: 2rem 0;

  gap: 0.5rem;

  font-family: 'Baloo 2';
  font-size: 2.5rem;

  color: ${(props) => props.theme['green-dark-2']};
`
