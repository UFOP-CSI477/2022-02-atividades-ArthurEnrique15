import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  margin: 0 auto;

  width: 100%;
`

export const TitleContainer = styled.div`
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: 700;
`

export const PanelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;
`

export const PanelOption = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 1rem;

  width: 15rem;
  height: 8rem;

  border-radius: 36px;

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme['base-subtitle']};

  font-weight: 700;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.yellow};
  }
`

export const PanelOptionBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.purple}
  );

  border-radius: 36px;

  padding: 1px;

  width: 15rem + 1px;
  height: 8rem + 1px;
`
