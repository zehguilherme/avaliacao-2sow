import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Navbar = () => {
  return (
    <Container>
      <h1>Nome do sistema</h1>

      <div className="buttons">
        <Link to="user-list" id="list-user">Listagem de usuários</Link>
        <Link to="insert-edit-user" id="insert-edit-user">Cadastro/Edição de usuário</Link>
      </div>
    </Container>
  )
}

export default Navbar;
