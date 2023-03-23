import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 1rem;

  margin-bottom: 5rem;
`

export const LogoutContainer = styled.div`
  color: ${({ theme }) => theme['base-label']};

  a {
    color: ${({ theme }) => theme['base-text']};
  }

  a:hover {
    cursor: pointer;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  font-size: 3rem;
  font-family: 'Baloo 2';
  font-weight: 700;

  padding: 2rem 5rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.green};

  background-color: ${({ theme }) => theme['green-light']};
  color: ${(props) => props.theme['green-dark-2']};
`

export const StatementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`

export const TitleContainer = styled.div`
  font-size: 3rem;
  font-family: 'Baloo 2';
  font-weight: 700;
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`
