import { CurrencyCircleDollar } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <CurrencyCircleDollar size={42} weight="fill" />
      <span>MoneyManager</span>
    </HeaderContainer>
  )
}
