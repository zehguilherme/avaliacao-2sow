import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Navbar = () => {
  return (
    <Container data-testid="div-container">
      <h1 data-testid="h1">HubUser</h1>

      <div className="buttons" data-testid="div.buttons">
        <Link to="user-list" id="list-user" data-testid="#list-user-link">Listagem</Link>
        <Link to="insert-edit-user" id="insert-edit-user" data-testid="#insert-edit-user-link">Cadastro/Edição</Link>
      </div>
    </Container>
  )
}

export default Navbar;
