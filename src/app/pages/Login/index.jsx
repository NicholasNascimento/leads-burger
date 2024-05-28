import { useState } from 'react'
import { LuSandwich } from "react-icons/lu";

import * as S from './styles.js'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(username, password)
  }

  return (
    <S.Container>
      <form onSubmit={handleLogin}>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <S.Content>
          <input
            type='text'
            placeholder='Usuário'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <button type='submit'>Entrar</button>
          </div>
        </S.Content>
      </form>
    </S.Container>
  )
}
