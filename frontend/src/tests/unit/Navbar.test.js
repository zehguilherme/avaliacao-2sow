import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';

import Navbar from '../../components/Navbar';

describe('Testes para a Navbar', () => {
  it('Deve renderizar e clicar nos botões presentes nela', async () => {
    const { getByTestId } = render(<Navbar />)

    // Buscar a div "Container"
    const divNode = await waitForElement(
      () => getByTestId('div-container')
    )

    // Buscar o h1 com o nome do software
    const h1Node = await waitForElement(
      () => getByTestId('h1')
    )

    expect(h1Node.innerHTML).toEqual('HubUser'); //verifica se o valor corresponde ao nome do software

    // Buscar a div "buttons"
    const divButtons = await waitForElement(
      () => getByTestId('div.buttons')
    )

    // Buscar o botão de listagem de usuários
    const userListButton = await waitForElement(
      () => getByTestId('#list-user-link')
    )

    // Buscar o botão de cadastro de usuários
    const userInsert = await waitForElement(
      () => getByTestId('#insert-edit-user-link')
    )

  });

});
