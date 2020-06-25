import React, { useMemo, useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Table from '../../components/Table';
import { Container } from './styles';
import { LogoutButton } from '../../components/LogoutButton';

export default function UserList () {

  // Armazenar os dados vindos da api - inicia com um vetor vazio
  const [data, setData] = useState([]);

  const history = useHistory();

  // Chamar a api e definir o dados
  useEffect(() => {
    api.get('user-list')
      .then(response => {
        setData(response.data)
      })
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Usuários",

        columns: [
          {
            Header: "CPF",
            accessor: "api.cpf"
          },
          {
            Header: "E-mail",
            accessor: "api.email"
          },
          {
            Header: "Cidade",
            accessor: "api.cidade"
          }
        ]
      }
    ],
    []
  );

  // Realiza o Logout do usuário, enviando-o para a tela de Login
  function handleLogout () {
    history.push('/');
  }

  return (
    <Container>
      <Navbar />

      <div className="logout">
        <LogoutButton onClick={handleLogout}>
          Logout
        </LogoutButton>
      </div>

      <div className="list-container">
        <h1>Listagem de usuários</h1>

        <Table columns={columns} data={data} />

      </div>
    </Container>
  )
}
