import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  background-color: #424874;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    color: white;
    font-size: 30px;
  }

  @media (max-width: 685px) {
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 614px) {
    h1 {
      font-size: 17px;
    }
  }

  @media (max-width: 566px) {
    h1 {
      display: none;
    }
  }

  .buttons {
    display: flex;
  }

  @media (max-width: 320px) {
    .buttons {
      margin-right: 17px;
      margin-left: 17px;
    }
  }

  .buttons a {
    font-size: 17px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    border-radius: 8px;
    border-style: none;
    height: 40px;
    background-color: #a6b1e1;
    padding-right: 20px;
    padding-left: 20px;
    transition: background-color 0.8s;
  }

  @media (max-width: 614px) {
    .buttons a {
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  .buttons a:hover {
    background-color: #cacfd6;
  }

  #list-user {
    margin-right: 20px;
  }
`;
