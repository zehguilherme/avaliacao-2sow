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

  .buttons {
    display: flex;
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

  .buttons a:hover {
    background-color: #cacfd6;
  }

  #list-user {
    margin-right: 20px;
  }
`;
