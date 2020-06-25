import React from 'react';

import Navbar from '../../components/Navbar';
import { Container } from './styles';
import { Input } from '../../components/Input';

import api from '../../services/api';

export default function Login () {

  // Realiza o login do usuário
  function handleLogin (e) {
    e.preventDefault()  // previne o comportamento padrão do form (recarregar página toda)

    try {
      const response = await api.post('/sessoes', { id })  //enviar o id da ONG que está querendo logar

      console.log(response);


      // // Salvar localmente no navegador
      // localStorage.setItem('token', id);

      // // Enviar usuário para página de listagem de casos (Profile)
      // history.push('/profile')

    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <Container>
      <Navbar />

      <div className="login-container">

        <img src="../../assets/cadeado.png" alt="Login" />

        <form onSubmit={handleLogin}>
          <div className="email">

            <label htmlFor="">E-mail</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email@hotmail.com"
              required={true} />
          </div>

          <div className="password">
            <label htmlFor="">Senha</label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Deve conter mais de 4 caracteres"
              required={true} />
          </div>

          <button type="submit">Entrar</button>
        </form>

      </div>
    </Container>
  )
}
