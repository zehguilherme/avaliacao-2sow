import React, { useMemo, useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Table from '../../components/Table';
import { Container } from './styles';
import { LogoutButton } from '../../components/LogoutButton';
import { TableStyles } from '../../components/Table/styles';

export default function UserList () {

  // Armazenar os dados vindos da api - inicia com um vetor vazio
  const [data, setData] = useState([]);

  const history = useHistory();

  // Chamar a api e definir o dados
  useEffect(() => {
    api.get('usuarios')
      .then(response => {
        setData(response.data)
      })
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Listagem de Usuários",

        columns: [
          {
            Header: "Nome",
            accessor: "nome"
          },
          {
            Header: "CPF",
            accessor: "cpf"
          },
          {
            Header: "E-mail",
            accessor: "email"
          },
          {
            Header: "Cidade",
            accessor: "endereco.cidade"
          },
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
        <TableStyles>
          <Table columns={columns} data={data} />
        </TableStyles>
      </div>
    </Container>
  )
}
