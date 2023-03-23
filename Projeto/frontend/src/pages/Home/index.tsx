import {
  HomeContainer,
  BalanceContainer,
  StatementContainer,
  TitleContainer,
  ListContainer,
} from './styles'

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { STORAGE_NAME } from '../../constants/storage-name'
import { ListItem } from './ListItem'
import axios from 'axios'
import { serverUrl } from '../../constants/env'
import { Statement } from '../../interfaces/IStatement'

export function Home() {
  const navigate = useNavigate()

  const [statement, setStatement] = useState<Statement[]>([])
  const [balance, setBalance] = useState<number>(0)

  useEffect(() => {
    const token = sessionStorage.getItem(STORAGE_NAME)

    if (!token) {
      navigate('/login')
    }

    axios
      .get(`${serverUrl}/statement`, { headers: { token } })
      .then((response) => {
        console.log(response.data)
        setStatement(response.data.statement)
        setBalance(response.data.balance)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [navigate])

  return (
    <HomeContainer>
      <BalanceContainer>
        <span>Saldo: </span>
        <span>R${balance}</span>
      </BalanceContainer>
      <StatementContainer>
        <TitleContainer>Extrato</TitleContainer>
        <ListContainer>
          {statement.map((item) => (
            <ListItem key={item.id} value={item.value} type={item.type} />
          ))}
        </ListContainer>
      </StatementContainer>
    </HomeContainer>
  )
}
