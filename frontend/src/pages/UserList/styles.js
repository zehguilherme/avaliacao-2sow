import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 113px;

   .logout {
     width: 100%;
     position: relative;
     left: 69%;
  }

  @media (max-width: 442px) {
    .logout {
      position: unset;
      display: flex;
      justify-content: center;
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
