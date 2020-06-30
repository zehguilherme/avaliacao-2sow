import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';

import Table from '../../components/Table';

describe('Testes para a tabela de listagem de usuários', () => {
  it('Deve renderizar a tabela com todos os itens', async () => {

    const { getByTestId } = render(<Table />);

    // buscar input de filtragem por nome
    const filterInput = await waitForElement(
      () => getByTestId('filterInput')
    )

  });
});
