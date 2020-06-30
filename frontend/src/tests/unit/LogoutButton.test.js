import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';

import LogoutButton from '../../components/LogoutButton';

describe('Testes para o botão de Logout', () => {
  it('Deve renderizar e clicar no botão', async () => {

    const { getByTestId } = render(<LogoutButton />);

    // buscar botão
    const btnNode = await waitForElement(
      () => getByTestId('logout-btn')
    )

    // clicar no botão
    fireEvent.click(btnNode);

  });
});
