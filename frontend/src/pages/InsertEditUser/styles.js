import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logout {
    justify-content: flex-end;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
  }

  .form h1 {
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: 600;
  }

  .form form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form div {
    margin-bottom: 20px;
  }

  /* Inputs */
  .form .email input {
    width: 200px;
  }

  .form .cpf input,
  .form .cep input,
  .form .numero input {
    width: 120px;
  }

  .form .bairro input,
  .form .cidade input {
    width: 250px;
  }

  /* Labels */
  .form div label {
    margin-right: 20px;
  }

  /* Botões cadastrar e editar */
  .form form .buttons {
    display: flex;
  }

  .form form .buttons button {
    height: 35px;
    border-radius: 8px;
    border-style: none;
    background-color: #2F4F4F;
    color: white;
    font-size: 17px;
    transition: background-color 0.8s;
    cursor: pointer;
  }

  .form form .buttons button:hover {
    background-color: black;
  }

  /* Cadastrar */
  .form form .buttons #cadastrar {
    margin-right: 20px;
    width: 120px;
  }

  /* Editar */
  .form form .buttons #editar {
    width: 70px;
  }
`;

