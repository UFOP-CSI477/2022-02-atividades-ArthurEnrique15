import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { STORAGE_NAME } from '../../constants/storage-name'
import { ListItem } from './ListItem'
import axios from 'axios'
import { serverUrl } from '../../constants/env'
import { Statement } from '../../interfaces/IStatement'
import { CreateItemForm } from './CreateItemForm'
import {
  HomeContainer,
  LogoutContainer,
  BalanceContainer,
  StatementContainer,
  TitleContainer,
  ListContainer,
} from './styles'

export function Home() {
  const navigate = useNavigate()

  const [statement, setStatement] = useState<Statement[]>([])
  const [balance, setBalance] = useState<number>(0)
  const [token, setToken] = useState('')
  const [decoded, setDecoded] = useState<any>({})

  useEffect(() => {
    const storedToken = sessionStorage.getItem(STORAGE_NAME)

    if (!storedToken) {
      navigate('/login')
      return
    }

    setToken(storedToken as string)

    const decoded = jwt(storedToken)
    setDecoded(decoded)

    axios
      .get(`${serverUrl}/statement`, { headers: { token: storedToken } })
      .then((response) => {
        setStatement(response.data.statement)
        setBalance(response.data.balance)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [navigate])

  function handleLogout() {
    sessionStorage.removeItem(STORAGE_NAME)
    alert('Logout realizado com sucesso')
    navigate('/login')
  }

  return (
    <HomeContainer>
      <LogoutContainer>
        <span>Usuário: {decoded.username}</span>
        <a onClick={handleLogout}>Sair</a>
      </LogoutContainer>
      <BalanceContainer>
        <span>Saldo: </span>
        <span>R${balance}</span>
      </BalanceContainer>
      <CreateItemForm token={token} />
      <StatementContainer>
        <TitleContainer>Extrato</TitleContainer>
        <ListContainer>
          {statement.map((item) => (
            <ListItem
              key={item.id}
              value={item.value}
              type={item.type}
              date={item.createdAt.toString()}
              description={item.description}
            />
          ))}
        </ListContainer>
      </StatementContainer>
    </HomeContainer>
  )
}
