import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  height: 100vh;

  @media (max-width: 767px) {
    margin-top: 247px;
  }

  @media (max-width: 320px) and (max-height: 568px) {
    margin-top: 371px;
  }

  .logout {
    width: 100%;
    position: relative;
    left: 69%;
    padding-top: 43px;
  }

  @media (max-width: 767px) {
    .logout {
      margin-top: 20px;
    }
  }

  @media (max-width: 400px) {
    .logout {
      position: unset;
      display: flex;
      justify-content: center;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .form h1 {
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: 600;
  }

  @media (max-width: 400px) {
    .form h1 {
    font-size: 30px;
    font-weight: 300;
    }
  }

  .form .ui.form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form div {
    margin-bottom: 20px;
  }

  /* Inputs */
  .form .ui.form div {
    width: 500px;
  }

  @media (max-width: 570px) {
    .form .ui.form div {
      width: 375px;
    }
  }

  @media (max-width: 444px) {
    .form .ui.form div {
      width: 292px;
    }
  }

  @media (max-width: 320px) {
    .form .ui.form div {
      width: 242px;
    }
  }

  /* Botões cadastrar e editar */
  .buttons {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 320px) and (max-height: 568px) {
    .buttons {
      align-items: center;
      flex-direction: column;
    }
  }

  .buttons button {
    height: 35px;
    border-radius: 8px;
    border-style: none;
    background-color: #2F4F4F;
    color: white;
    font-size: 17px;
    transition: background-color 0.8s;
    cursor: pointer;
  }

  .buttons button:hover {
    background-color: black;
  }

  /* Cadastrar */
  .buttons #cadastrar {
    margin-right: 20px;
    width: 120px;
  }

  @media (max-width: 320px) and (max-height: 568px) {
    .buttons #cadastrar {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  /* Editar */
  .buttons #editar {
    width: 70px;
  }
`;

