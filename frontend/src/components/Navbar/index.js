import React from 'react'

import { Container } from './styles'
import ButtonPage from '../ButtonPage/index'

const Navbar = () => {
  return (
    <Container>
      <h1>Nome do sistema</h1>

      <div className="buttons">
        <ButtonPage>Listagem de usuários</ButtonPage>
        <ButtonPage>Cadastro/Edição de usuário</ButtonPage>
      </div>

      <button className="logout">
        Logout
      </button>

    </Container>
  )
}

export default Navbar;
