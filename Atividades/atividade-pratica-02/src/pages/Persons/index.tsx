import axios from 'axios'
import { useState, useEffect } from 'react'
import { serverUrl } from '../../constants/env'
import { IBloodType } from '../../interfaces/IBloodType'
import { PersonForm } from './PersonForm'
import { PersonList } from './PersonList'
import { PersonContainer } from './styles'

export function Persons() {
  const [bloodTypes, setBloodTypes] = useState<IBloodType[]>([])

  useEffect(() => {
    axios
      .get(`${serverUrl}/blood-type/all`)
      .then((response) => {
        setBloodTypes(response.data)
      })
      .catch((error) => {
        console.error(error.toString())
      })
  }, [])

  return (
    <PersonContainer>
      <PersonForm bloodTypes={bloodTypes}></PersonForm>
      <PersonList bloodTypes={bloodTypes}></PersonList>
    </PersonContainer>
  )
}
