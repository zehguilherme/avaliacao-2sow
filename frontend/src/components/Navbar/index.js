import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Navbar = () => {
  return (
    <Container>
      <h1>Nome do sistema</h1>

      <div className="buttons">
        <Link to="user-list" id="list-user">Listagem</Link>
        <Link to="insert-edit-user" id="insert-edit-user">Cadastro/Edição</Link>
      </div>
    </Container>
  )
}

export default Navbar;
