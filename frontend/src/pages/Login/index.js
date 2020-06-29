import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { Container } from './styles';
import { Input } from 'semantic-ui-react';

import api from '../../services/api';

import cadeadoImg from '../../assets/cadeado.png';

export default function Login () {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  // Realiza o login do usuário
  async function handleLogin (e) {
    e.preventDefault()  // previne o comportamento padrão do form (recarregar página toda)

    // Verificação de e-mail
    if (email !== '') {
      const usuario = email.substring(0, email.indexOf('@')); //parte do e-mail antes do @

      const dominio = email.substring(email.indexOf('@') + 1, email.length); //parte do e-mail depois do @

      if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") === -1) &&  //usuário não pode conter o @
        (dominio.search("@") === -1) &&  //domínio não pode conter o @
        (usuario.search(" ") === -1) &&  //usuário não pode conter o “ ” espaço em branco
        (dominio.search(" ") === -1) &&  //domínio não pode conter o “ ” espaço em branco
        (dominio.search(".") !== -1) &&  //domínio tem que possuir “.” ponto
        (dominio.indexOf(".") >= 1) &&  //a posição do 1º ponto tem que ser maior ou igual a 1, lembrando, a posição 0 deve ser ocupado por algum caracter após o @.

        //a posição do último ponto tem que ser menor que o ultimo caracter, deve ser finalizado o domínio por um caracter
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
      } else {
        alert('E-mail inválido');

        // Foco no campo de email
        const emailInput = document.querySelector('input#email');

        emailInput.focus();

        return;
      }
    }

    // Verificação da quantidade de caracteres da senha
    if (senha.length <= 4) {
      alert('A senha deve ter mais de 4 caracteres.')

      // Foco no campo de senha
      const passwordInput = document.querySelector('input#password');

      passwordInput.focus();

      return;
    }

    try {
      const response = await api.post('/usuarios/login', { email, senha });

      // Salvar localmente no navegador
      localStorage.setItem('token', response.data.id);

      // Enviar usuário para página de listagem de usuários
      history.push('/user-list')

    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <>
      <Navbar />
      <Container>

        <div className="login-container">

          <img src={cadeadoImg} alt="Login" />

          <form onSubmit={handleLogin}>
            <div className="email-password">
              <div className="email">

                <Input
                  icon="user"
                  iconPosition="left"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  required={true}
                  onChange={e => setEmail(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="password">
                <Input
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                  required={true}
                  onChange={e => setSenha(e.target.value)}
                />
              </div>
            </div>

            <button type="submit">Entrar</button>
          </form>

        </div>
      </Container>
    </>
  )
}
