import React, { useState } from 'react';
import { mask, unMask } from 'remask';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { Container } from './styles';
import { Input } from '../../components/Input';
import { LogoutButton } from '../../components/LogoutButton';

import api from '../../services/api'; //json-server
import cepApi from '../../services/cepApi'; //API da ViaCEP

export default function InsertEditUser () {

  // Criação de estados para cada um dos inputs
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  const history = useHistory();

  // Realiza o Logout - leva o usuário de volta para a tela de login
  function handleLogout () {
    history.push('/');
  }

  // Realiza o cadastro de um novo usuário
  async function handleRegister (e) {
    e.preventDefault(); //vai previnir o comportamento padrão do form (recarregar página toda)

    const data = {
      nome,
      cpf,
      email,
      endereco: {
        cep,
        rua,
        numero,
        bairro,
        cidade
      }
    }

    // Se deu certo o cadastro
    try {
      await api.post('/usuarios', data); //Insere os dados dos inputs (data) dentro da rota post

      alert('Cadastro realizado');

    } catch (error) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  // Realiza a busca do CEP
  async function searchCEP () {
    // Caso o campo esteja vazio
    if (cep === '') {
      setRua('');
      setBairro('');
      setCidade('');

      return;
    }

    const data = {
      cep,
    }

    // Caso a busca deu certo
    try {
      const response = await cepApi.get(`/${cep}/json/`, data);

      setRua(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);

    } catch (error) {
      alert("CEP inválido, digite outro");
    }
  }

  return (
    <Container>
      <Navbar />

      <div className="logout">
        <LogoutButton onClick={handleLogout}>
          Logout
        </LogoutButton>
      </div>

      <div className="form">

        <h1>Cadastro de usuário</h1>

        <form onSubmit={handleRegister}>
          <div className="nome">
            <label htmlFor="">Nome</label>
            <Input
              type="text"
              name="nome"
              id="nome"
              required={true}
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>

          <div className="cpf">
            <label htmlFor="">CPF</label>
            <Input
              type="text"
              name="cpf"
              id="cpf"
              required={true}
              value={cpf}
              placeholder="999.999.999-99"
              onChange={
                e => setCpf(
                  mask(
                    unMask(e.target.value), ['999.999.999-99']
                  )
                )
              }
            />
          </div>

          <div className="email">
            <label htmlFor="">E-mail</label>
            <Input
              type="email"
              name="email"
              id="email"
              required={true}
              value={email}
              placeholder="email@email.com"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="cep">
            <label htmlFor="">CEP</label>
            <Input
              type="text"
              name="cep"
              id="cep"
              required={true}
              value={cep}
              onBlur={searchCEP} //executa quando sai do input
              placeholder="99999-999"
              onChange={
                e => setCep(
                  mask(
                    unMask(e.target.value), ['99999-999']
                  )
                )
              }
            />
          </div>

          <div className="rua">
            <label htmlFor="">Rua</label>
            <Input
              type="text"
              name="rua"
              id="rua"
              required={true}
              value={rua}
              onChange={e => setRua(e.target.value)}
            />
          </div>

          <div className="numero">
            <label htmlFor="">Número</label>
            <Input
              type="number"
              name="numero"
              id="numero"
              required={true}
              value={numero}
              onChange={e => setNumero(e.target.value)}
            />
          </div>

          <div className="bairro">
            <label htmlFor="">Bairro</label>
            <Input
              type="text"
              name="bairro"
              id="bairro"
              required={true}
              value={bairro}
              onChange={e => setBairro(e.target.value)}
            />
          </div>

          <div className="cidade">
            <label htmlFor="">Cidade</label>
            <Input
              type="text"
              name="cidade"
              id="cidade"
              required={true}
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button id="cadastrar" type="submit">Cadastrar</button>
            <button id="editar">Editar</button>
          </div>
        </form>
      </div>
    </Container>
  )
}
