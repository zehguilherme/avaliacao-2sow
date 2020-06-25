import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
  }

  .login-container form .email {
    margin-bottom: 10px;
  }

  .login-container form .email label,
  .login-container form .password label {
    margin-right: 10px;
    font-size: 20px;
  }

  .login-container form .email input,
  .login-container form .password input {
    width: 250px;
    font-size: 15px;
  }

  /* Botão entrar */
  .login-container form button {
    font-size: 20px;
    display: flex;
    color: white;
    margin-top: 30px;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    border-style: none;
    background-color: gray;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.8s;
  }

  .login-container form button:hover {
    background-color: black;
  }

`;
