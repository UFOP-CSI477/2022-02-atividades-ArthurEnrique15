import { MapPin, FirstAid, User, Handshake } from 'phosphor-react'
import { HeaderContainer, HeaderLinkContainer } from './styles'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/collection-place">
        <HeaderLinkContainer>
          <MapPin size={22} weight="fill" />
          <span>Locais de coleta</span>
        </HeaderLinkContainer>
      </NavLink>
      <NavLink to="/blood-type">
        <HeaderLinkContainer>
          <FirstAid size={22} weight="fill" />
          <span>Tipos sanguíneos</span>
        </HeaderLinkContainer>
      </NavLink>
      <NavLink to="/person">
        <HeaderLinkContainer>
          <User size={22} weight="fill" />
          <span>Pessoas</span>
        </HeaderLinkContainer>
      </NavLink>
      <NavLink to="/donation">
        <HeaderLinkContainer>
          <Handshake size={22} weight="fill" />
          <span>Doações</span>
        </HeaderLinkContainer>
      </NavLink>
    </HeaderContainer>
  )
}
