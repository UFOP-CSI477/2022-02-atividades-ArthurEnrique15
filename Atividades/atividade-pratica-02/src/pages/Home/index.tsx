import {
  HomeContainer,
  TitleContainer,
  PanelsContainer,
  PanelOption,
  PanelOptionBorder,
} from './styles'

import { NavLink } from 'react-router-dom'
import { MapPin, FirstAid, User, Handshake } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <TitleContainer>
        <span>Bem vindo ao nosso banco de doações!</span>
      </TitleContainer>
      <PanelsContainer>
        <NavLink to="/collection-place">
          <PanelOptionBorder>
            <PanelOption>
              <MapPin size={40} weight="fill" />
              <span>CRUD de Locais de coleta</span>
            </PanelOption>
          </PanelOptionBorder>
        </NavLink>
        <NavLink to="/blood-type">
          <PanelOptionBorder>
            <PanelOption>
              <FirstAid size={40} weight="fill" />
              <span>CRUD de Tipos sanguíneos</span>
            </PanelOption>
          </PanelOptionBorder>
        </NavLink>
        <NavLink to="/person">
          <PanelOptionBorder>
            <PanelOption>
              <User size={40} weight="fill" />
              <span>CRUD de Pessoas</span>
            </PanelOption>
          </PanelOptionBorder>
        </NavLink>
        <NavLink to="/donation">
          <PanelOptionBorder>
            <PanelOption>
              <Handshake size={40} weight="fill" />
              <span>CRUD de Doações</span>
            </PanelOption>
          </PanelOptionBorder>
        </NavLink>
      </PanelsContainer>
    </HomeContainer>
  )
}
