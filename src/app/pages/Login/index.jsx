import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LuSandwich } from "react-icons/lu";

import { UserContext } from '../../context/UserContext.jsx';

import * as S from './styles.js';

export function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUser } = useContext(UserContext)

  const handleLogin = (data) => {
    console.log(data);
    navigate('/menu');
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Leads Burger <span><LuSandwich /></span></h1>
        <S.Content>
          <div>
            <input
              {...register('username', { required: true })}
              type='text'
              placeholder='Usuário'
            />
            {errors.username && <p>Usuário é obrigatório.</p>}
          </div>
          <div>
            <input
              {...register('password', { required: true })}
              type='password'
              placeholder='Senha'
            />
            {errors.password && <p>Senha é obrigatória.</p>}
          </div>
          <div className='buttonBox'>
            <button type='submit'>Entrar</button>
          </div>
        </S.Content>
      </form>
    </S.Container>
  );
}
