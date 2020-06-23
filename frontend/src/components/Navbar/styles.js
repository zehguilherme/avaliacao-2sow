import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  background-color: black;
  /* position: fixed; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    color: white;
    font-size: 30px;
  }

  .logout {
    background-color: '#b3001B';
    border-radius: 8px;
    border-style: none;
    height: 35px;
    width: 100px;
    cursor: pointer;
  }
`;
