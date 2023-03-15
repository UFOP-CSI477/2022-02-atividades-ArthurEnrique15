import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 6.5rem;

  padding: 2rem 0;
  margin-bottom: 2rem;

  gap: 2rem;
`

export const HeaderLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.5rem;

  color: ${({ theme }) => theme['purple-dark']};

  font-size: 1.5rem;
  font-family: 'Baloo 2';
  font-weight: 700;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.purple};
  }
`
