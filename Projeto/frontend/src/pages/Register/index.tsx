import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from '../../constants/env'
import { STORAGE_NAME } from '../../constants/storage-name'
import {
  RegisterContainer,
  FormContainer,
  InputsContainer,
  TitleContainer,
  SubmitButton,
  ButtonContainer,
  FormInput,
  FieldContainer,
  RegisterTextContainer,
} from './styles'

export function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_NAME)) {
      navigate('/')
    }
  }, [navigate])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target

    const inputsActions = {
      username: () => setUsername(value),
      password: () => setPassword(value),
    }

    inputsActions[id as keyof typeof inputsActions]()
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault()

    if (!username || !password) {
      alert('Por favor, preencha todos os campos')
      return
    }

    axios
      .post(`${serverUrl}/user`, { username, password })
      .then((response) => {
        alert('Cadastro realizado com sucesso')
        console.log(response.data)
        navigate('/login')
      })
      .catch((error) => {
        console.error(error)
        alert('Erro ao cadastrar')
      })
  }

  return (
    <RegisterContainer>
      <FormContainer>
        <TitleContainer>
          <span>Cadastro</span>
        </TitleContainer>
        <InputsContainer>
          <FieldContainer>
            <label htmlFor="username">Usuário</label>
            <FormInput id="username" type="text" onChange={handleInputChange} />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="password">Senha</label>
            <FormInput
              id="password"
              type="password"
              onChange={handleInputChange}
            />
          </FieldContainer>
        </InputsContainer>

        <ButtonContainer>
          <SubmitButton type="submit" onClick={handleSubmitForm}>
            Cadastrar
          </SubmitButton>
        </ButtonContainer>
      </FormContainer>
      <RegisterTextContainer>
        <span>
          Já possui uma conta?{' '}
          <a onClick={() => navigate('/login')}>Faça login</a>
        </span>
      </RegisterTextContainer>
    </RegisterContainer>
  )
}
