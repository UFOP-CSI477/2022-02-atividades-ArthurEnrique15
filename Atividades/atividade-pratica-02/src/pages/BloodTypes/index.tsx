import { BloodTypeForm } from './BloodTypeForm'
import { BloodTypeList } from './BloodTypeList'
import { BloodTypeContainer } from './styles'

export function BloodTypes() {
  return (
    <BloodTypeContainer>
      <BloodTypeForm></BloodTypeForm>
      <BloodTypeList></BloodTypeList>
    </BloodTypeContainer>
  )
}
