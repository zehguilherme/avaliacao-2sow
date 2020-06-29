import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh; /*ocupa toda a tela*/

  .login-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  @media (max-width: 538px) {
    .login-container {
      flex-direction: column;
      justify-content: center;
    }
  }

  .login-container img {
    height: 200px;
    margin-bottom: 30px;
  }

  .login-container form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-container form .email-password {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    /* display: flex; */
    color: white;
    margin-top: 30px;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    border-style: none;
    background-color: gray;
    cursor: pointer;
    transition: background-color 0.8s;
  }

  .login-container form button:hover {
    background-color: black;
  }

`;
