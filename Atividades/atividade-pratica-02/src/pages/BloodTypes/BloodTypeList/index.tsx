import { useEffect, useState } from 'react'
import axios from 'axios'
import { BloodTypeInList } from './BloodTypeInList'
import { BloodTypeListContainer, TitleContainer, ListContainer } from './styles'
import { serverUrl } from '../../../constants/env'
import { IBloodType } from '../../../interfaces/IBloodType'

export function BloodTypeList() {
  const [bloodTypes, setBloodTypes] = useState<IBloodType[]>([])

  console.log(serverUrl)

  useEffect(() => {
    axios
      .get(`${serverUrl}/blood-type/all`)
      .then((response) => {
        console.log(response.data)
        setBloodTypes(response.data)
      })
      .catch((error) => {
        console.error(error.toString())
      })
  }, [])

  function handleDeleteBloodType(id: number) {
    const bloodTypesWithoutDeleted = bloodTypes.filter(
      (bloodType) => bloodType.id !== id,
    )

    setBloodTypes(bloodTypesWithoutDeleted)
  }

  return (
    <BloodTypeListContainer>
      <TitleContainer>
        <span>Tipos sanguíneos cadastrados</span>
      </TitleContainer>

      <ListContainer>
        {bloodTypes.map((bloodType) => (
          <BloodTypeInList
            key={bloodType.id}
            id={bloodType.id}
            type={bloodType.type}
            factor={bloodType.factor}
            handleDeleteBloodType={handleDeleteBloodType}
          />
        ))}
      </ListContainer>
    </BloodTypeListContainer>
  )
}
