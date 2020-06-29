import React, { useState } from 'react';
import { mask, unMask } from 'remask';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { Container } from './styles';
import { Form, Button } from 'semantic-ui-react';

import api from '../../services/api'; //json-server
import cepApi from '../../services/cepApi'; //API da ViaCEP

export default function InsertEditUser () {

  // Criação de estados para cada um dos inputs
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  const history = useHistory();

  // Realiza o Logout - leva o usuário de volta para a tela de login
  function handleLogout () {
    localStorage.clear()  //limpar todos os dados do localstore (salvos no navegador)

    history.push('/'); //envia usuário para tela de login
  }

  // Realiza o cadastro de um novo usuário
  async function handleRegister (e) {
    e.preventDefault(); //vai previnir o comportamento padrão do form (recarregar página toda)

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
        return;
      }
    }

    // Verificação de senha
    if (senha !== '') {
      // Ver se ela tem mais de 4 caracteres
      if (senha.length <= 4) {
        alert('Senha inválida! Deve ter mais de 4 caracteres');

        // Coloca foco no input Senha
        const senhaInput = document.querySelector('input#senha');
        senhaInput.focus();

        return;
      }
    }

    const data = {
      nome,
      cpf,
      email,
      senha,
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

      history.push('/');

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

      // Após o preenchimento dos campos (caso o CEP esteja correto) é colocado foco no campo "Número
      const numberInput = document.querySelector('input#numero');
      numberInput.focus();

    } catch (error) {
      alert("CEP inválido, digite outro");
    }
  }

  return (
    <>
      <Navbar />
      <Container>

        <div className="logout">
          <Button color="red" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="form">

          <h1>Cadastro de usuário</h1>

          <Form onSubmit={handleRegister}>
            <Form.Input
              fluid label="Nome"
              type="text"
              name="nome"
              id="nome"
              required={true}
              value={nome}
              autoFocus
              onChange={e => setNome(e.target.value)}
            />

            <Form.Group inline widths="equal">
              <Form.Input
                fluid label="CPF"
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

              <Form.Input
                fluid label="E-mail"
                icon="mail"
                iconPosition="left"
                type="email"
                name="email"
                id="email"
                required={true}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group inline widths="equal">
              <Form.Input
                fluid label="Senha"
                icon="lock"
                iconPosition="left"
                type="password"
                name="senha"
                id="senha"
                required={true}
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />

              <Form.Input
                fluid label="CEP"
                type="text"
                name="cep"
                id="cep"
                required={true}
                value={cep}
                onBlur={searchCEP} //executa quando sai do Form.Input
                placeholder="99999-999"
                onChange={
                  e => setCep(
                    mask(
                      unMask(e.target.value), ['99999-999']
                    )
                  )
                }
              />
            </Form.Group>

            <Form.Group inline widths="equal">
              <Form.Input
                fluid label="Rua"
                type="text"
                name="rua"
                id="rua"
                required={true}
                value={rua}
                onChange={e => setRua(e.target.value)}
              />

              <Form.Input
                fluid label="Número"
                type="number"
                name="numero"
                id="numero"
                required={true}
                value={numero}
                onChange={e => setNumero(e.target.value)}
              />
            </Form.Group>

            <Form.Group inline widths="equal">
              <Form.Input
                fluid label="Bairro"
                type="text"
                name="bairro"
                id="bairro"
                required={true}
                value={bairro}
                onChange={e => setBairro(e.target.value)}
              />

              <Form.Input
                fluid label="Cidade"
                type="text"
                name="cidade"
                id="cidade"
                required={true}
                value={cidade}
                onChange={e => setCidade(e.target.value)}
              />
            </Form.Group>

            <div className="buttons">
              <button id="cadastrar" type="submit">Cadastrar</button>
              <button id="editar">Editar</button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  )
}
