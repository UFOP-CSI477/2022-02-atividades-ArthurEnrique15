import { BloodTypeInList } from './BloodTypeInList'
import { BloodTypeListContainer, TitleContainer, ListContainer } from './styles'

export function BloodTypeList() {
  return (
    <BloodTypeListContainer>
      <TitleContainer>
        <span>Tipos sanguíneos cadastrados</span>
      </TitleContainer>

      <ListContainer>
        <BloodTypeInList />
        <BloodTypeInList />
        <BloodTypeInList />
        <BloodTypeInList />
        <BloodTypeInList />
      </ListContainer>
    </BloodTypeListContainer>
  )
}
