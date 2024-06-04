import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { LuSandwich } from "react-icons/lu";

import { UserContext } from '../../context/UserContext.jsx';
import { loginUser, registerUser } from '../../utils/http/user.js';

import * as S from './styles.js';

export function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUser } = useContext(UserContext)
  const [activeRegister, setActiveRegister] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleRegisterNewUser() {
    setUsername("")
    setPassword("")
    setActiveRegister(true)
  };

  async function handleLogin(data) {
    try {
      const response = await loginUser(data.username, data.password)

      setUser(response?.data);
      navigate('/menu');
    } catch (error) {
      toast.error("Usuário ou senha incorretos!");
      console.log(error)
    }
  }

  async function handleRegister() {
    try {
      await registerUser(username, password);
  
      toast.success("Usuário registrado com sucesso!");
      setUsername("");
      setPassword("");
      setActiveRegister(false);
    } catch (error) {
      toast.error("Erro ao registrar o usuário! Tente novamente.");
      console.error(error);
    }
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <S.Content active={activeRegister}>
          {activeRegister ? (
            <>
            <div>
              <input
                {...register('username', { required: true })}
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Usuário'
              />
              {errors.username && <p className='error'>Usuário é obrigatório.</p>}
            </div>
            <div>
              <input
                {...register('password', { required: true })}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Senha'
              />
              {errors.password && <p className='error'>Senha é obrigatória.</p>}
            </div>
            <div>
              <input
                {...register('confirmPassword', {
                  validate: value => value == password || "As senhas não correspondem"
                })}
                type='password'

                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirmar Senha'
              />
              {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
            </div>
            <div className='buttonBox'>
              <button
                type='button'
                className='submitButton'
                onClick={() => handleRegister()}
              >
                Confirmar
              </button>
            </div>
          </>
          ) : (
            <>
              <div>
                <input
                  {...register('username', { required: true })}
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Usuário'
                />
                {errors.username && <p className='error'>Usuário é obrigatório.</p>}
              </div>
              <div>
                <input
                  {...register('password', { required: true })}
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Senha'
                />
                {errors.password && <p className='error'>Senha é obrigatória.</p>}
              </div>
              <div className='buttonBox'>
                <button className='submitButton' type='submit'>Entrar</button>
              </div>
              <p className='or'>ou</p>
              <button
                className='registerButton'
                type='button'
                onClick={() => handleRegisterNewUser()}
              >
                Registrar
              </button>
            </>
          )}
        </S.Content>
      </form>
    </S.Container>
  );
}
