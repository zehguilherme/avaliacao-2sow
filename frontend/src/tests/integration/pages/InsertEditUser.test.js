import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';

import InsertEditUser from '../../../pages/InsertEditUser';

describe('Testes para a página de cadastro de usuários', () => {
  it('Deve cadastrar um usuário com sucesso', async () => {

    const { getByTestId } = render(<InsertEditUser />);

    // buscar input nome
    const nameInput = await waitForElement(
      () => getByTestId('nameInput')
    )

    fireEvent.change(nameInput, {
      target: {
        value: 'Fernando'
      }
    })

    // buscar input cpf
    const cpfInput = await waitForElement(
      () => getByTestId('cpfInput')
    )

    fireEvent.change(cpfInput, {
      target: {
        value: '99999999999'
      }
    })

    // buscar input email
    const emailInput = await waitForElement(
      () => getByTestId('emailInput')
    )

    fireEvent.change(emailInput, {
      target: {
        value: 'teste@email.com'
      }
    })

    // buscar input senha
    const senhaInput = await waitForElement(
      () => getByTestId('senhaInput')
    )

    fireEvent.change(senhaInput, {
      target: {
        value: '12345'
      }
    })

    // buscar input cep
    const cepInput = await waitForElement(
      () => getByTestId('cepInput')
    )

    fireEvent.change(cepInput, {
      target: {
        value: '99999999'
      }
    })

    // buscar input rua
    const ruaInput = await waitForElement(
      () => getByTestId('ruaInput')
    )

    fireEvent.change(ruaInput, {
      target: {
        value: 'Engenheiro Alpheu José Ribas Sampaio'
      }
    })

    // buscar input numero
    const numeroInput = await waitForElement(
      () => getByTestId('numeroInput')
    )

    fireEvent.change(numeroInput, {
      target: {
        value: '987454'
      }
    })

    // buscar input bairro
    const bairroInput = await waitForElement(
      () => getByTestId('bairroInput')
    )

    fireEvent.change(bairroInput, {
      target: {
        value: 'Vila São Cristóvão'
      }
    })

    // buscar input cidade
    const cidadeInput = await waitForElement(
      () => getByTestId('nameInput')
    )

    fireEvent.change(cidadeInput, {
      target: {
        value: 'Bauru'
      }
    })

  });
});
